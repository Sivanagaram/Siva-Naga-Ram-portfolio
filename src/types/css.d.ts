// Ambient declaration for global CSS side-effect imports (e.g. `import "./globals.css"`).
// Next only ships types for `*.module.css`; this covers plain global stylesheet imports
// so `tsc --noEmit` and the editor agree with the build.
declare module "*.css";
