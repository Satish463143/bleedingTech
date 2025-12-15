'use client'
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";

const CheckPermission = ({ allowedBy, children }: { allowedBy: string, children: React.ReactNode }) => {
  const [isChecking, setIsChecking] = useState(true);
  const router = useRouter();
  
  //called loggedin user
  const loggedInUser = useSelector((root: any)=>{
    return root.user.loggedInUser
  })

  // check permission
  useEffect(() => {
    const checkPermission = async () => {
      // If user is not logged in
      if (!loggedInUser) {
        toast.error("Please login first");
        setTimeout(() => {
            router.push("/login");
        }, 1500); // Give time for toast to show
        return;
      }
      
      // If user doesn't have the required role
      if (loggedInUser.role !== allowedBy) {
        toast.warn("You don't have permission to access this panel!");
        setTimeout(() => {
          router.push('/');
        }, 1500); // Give time for toast to show
        return;
      }
      
      // User has permission
      setIsChecking(false);
    };
    
    checkPermission();
  }, [loggedInUser, allowedBy, router]); // Reacts to changes in `loggedInUser`

  // If user has permission, render children
  if (loggedInUser && loggedInUser.role === allowedBy && !isChecking) {
    return children;
  }

  // Return null to prevent rendering unauthorized content
  return null;
};

export default CheckPermission;
