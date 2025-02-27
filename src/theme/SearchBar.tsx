// By default, the classic theme does not provide any SearchBar implementation
// If you swizzled this, it is your responsibility to provide an implementation
// Tip: swizzle the SearchBar from the Algolia theme for inspiration:
// npm run swizzle @docusaurus/theme-search-algolia SearchBar

import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { ReactElement, useEffect } from "react";
import Head from '@docusaurus/Head';

export default function SearchBar(): ReactElement {
    const { siteConfig } = useDocusaurusContext();
    useEffect(() => {
        window.addEventListener('DOMContentLoaded', (event) => {
            new PagefindUI({ element: "#search", showSubResults: true });
        });
      }, []);
      
    return (
        <div>
            <Head>
                <link
                    href={`/pagefind/pagefind-ui.css`}
                    rel="stylesheet"
                />
                <script src="/pagefind/pagefind-ui.js"></script>
            </Head>
            <div id="search"></div>
        </div>
    );
}