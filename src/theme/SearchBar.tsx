// By default, the classic theme does not provide any SearchBar implementation
// If you swizzled this, it is your responsibility to provide an implementation
// Tip: swizzle the SearchBar from the Algolia theme for inspiration:
// npm run swizzle @docusaurus/theme-search-algolia SearchBar

import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { ReactElement, useEffect, useState } from "react";
import Head from '@docusaurus/Head';
import clsx from 'clsx';
import DefaultNavbarItem from "@theme/NavbarItem/DefaultNavbarItem";
import Modal from 'react-modal';

interface SearchBarProps {
    isSearchBarExpanded: boolean;
    handleSearchBarToggle?: (expanded: boolean) => void;
}

export default function SearchBar({
    handleSearchBarToggle,
}: SearchBarProps): ReactElement {
    const { siteConfig } = useDocusaurusContext();
    const [isOpen, setIsOpen] = useState(false);
    function openModal() {
        setIsOpen(true);
        new PagefindUI({ element: "#search", showSubResults: true });
      }
    function closeModal() {
        setIsOpen(false);
    }

    return (
        <>
            <Modal
                isOpen={isOpen}
                onRequestClose={closeModal}>
                <div id="search" ></div>
            </Modal>
            <Head>
                <link
                    href={`/pagefind/pagefind-ui.css`}
                    rel="stylesheet"
                />
                <script src="/pagefind/pagefind-ui.js"></script>
            </Head>
            <DefaultNavbarItem label={"🔍"} onClick={openModal}/>
        </>
    );
}