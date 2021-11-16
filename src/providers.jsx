import GithubProvider from "./providers/github-provider";
import App from "./App";
import { ResetCSS } from "./global/resetCSS";

export default function Providers() {
  return (
    <main>
      <GithubProvider>
        <ResetCSS />
        <App />
      </GithubProvider>
    </main>
  );
}
