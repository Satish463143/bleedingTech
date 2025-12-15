const jwt = require("jsonwebtoken");
const isProd = process.env.NODE_ENV === "production";

function signAccessToken(user) {
  return jwt.sign(
    { sub: user._id, email: user.email, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: "30d" } 
  );
}

function signRefreshToken(user) {
  return jwt.sign(
    { sub: user._id, type: "refresh" },
    process.env.JWT_SECRET,
    { expiresIn: "30d" }
  );
}

function setAuthCookies(res, { accessToken, refreshToken }) {
  // access cookie
  res.cookie("token", accessToken, {
    httpOnly: true,
    sameSite: "lax",         // if you switch to XHR login across subdomains, use 'none' + secure
    secure: isProd,
    maxAge: 15 * 60 * 1000,  // 15m
  });
  // refresh cookie (optional but recommended)
  res.cookie("refresh", refreshToken, {
    httpOnly: true,
    sameSite: "lax",
    secure: isProd,
    maxAge: 30 * 24 * 60 * 60 * 1000, // 30d
  });
}

function clearAuthCookies(res) {
  const opts = { sameSite: "lax", secure: isProd, httpOnly: true };
  res.clearCookie("token", opts);
  res.clearCookie("refresh", opts);
}

module.exports = { signAccessToken, signRefreshToken, setAuthCookies, clearAuthCookies };
