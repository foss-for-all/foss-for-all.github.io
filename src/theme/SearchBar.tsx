// By default, the classic theme does not provide any SearchBar implementation
// If you swizzled this, it is your responsibility to provide an implementation
// Tip: swizzle the SearchBar from the Algolia theme for inspiration:
// npm run swizzle @docusaurus/theme-search-algolia SearchBar

import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { ReactElement, useEffect } from "react";
import Head from '@docusaurus/Head';
import clsx from 'clsx';

interface SearchBarProps {
    isSearchBarExpanded: boolean;
    handleSearchBarToggle?: (expanded: boolean) => void;
}

export default function SearchBar({
    handleSearchBarToggle,
}: SearchBarProps): ReactElement {
    const { siteConfig } = useDocusaurusContext();
    useEffect(() => {
        new PagefindUI({ element: "#search", showSubResults: true });
    }, []);

    return (
        <>
            <Head>
                <link
                    href={`/pagefind/pagefind-ui.css`}
                    rel="stylesheet"
                />
                <script src="/pagefind/pagefind-ui.js"></script>
            </Head>
            <div id="search" className={clsx("navbar__search")}></div>
        </>
    );
}