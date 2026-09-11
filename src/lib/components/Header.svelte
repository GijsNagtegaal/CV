<script>
    import { page } from '$app/state';
    import Picture from '$lib/components/picture.svelte';      

    const links = [
        { href: '/overmij', label: 'Over mij' },
        { href: '/werkervaring', label: 'Werkervaring' },
        { href: '/opleidingen', label: 'Opleidingen' },
        { href: '/certificaten', label: 'Certificaten' }
    ];
</script>

<header class="topnav">
    <nav class="mobile-nav">
        <a class="logo" href="/">
            <Picture 
                imagesrc="/assets/images/logo"
                imagesrc_dark="/assets/images/logo-dark"
                width="80"
                height="80"
                alt="Logo Gijsnagtegaal"
                class="logo"
                fetch="high"
            />
        </a>
        <!-- Open button -->
        <button class="hamburger" popovertarget="mobile-menu">
            <svg viewBox="0 0 32 32" aria-hidden="true"><path class="line line-top-bottom" d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"></path><path class="line" d="M7 16 27 16"></path></svg>
            Menu
        </button>

        <section id="mobile-menu" popover="auto">
            <header class="popover-header">
                <a class="logo" href="/">
                    <Picture 
                        imagesrc="/assets/images/logo"
                        imagesrc_dark="/assets/images/logo-dark"
                        width="80"
                        height="80"
                        alt="Logo Gijsnagtegaal"
                        class="logo"
                        fetch="high"
                    />
                </a>
                <button class="close-btn" popovertarget="mobile-menu">
                    <svg viewBox="0 0 32 32" aria-hidden="true">
                        <path class="line" d="M8 8 L24 24 M24 8 L8 24"></path>
                    </svg>
                    Sluiten
                </button>
            </header>
            
            <nav class="hamburger-menu">
                {#each links as link}
                    <a href={link.href} class:active={page.url.pathname === link.href}>
                        {link.label}
                    </a>
                {/each}
            </nav>
        </section>
    </nav>

    <nav class="desktop-nav">
        <a class="logo" href="/">
            <Picture 
                imagesrc="/assets/images/logo"
                imagesrc_dark="/assets/images/logo-dark"
                width="80"
                height="80"
                alt="Logo Gijsnagtegaal"
                class="logoimg"
                fetch="high"
            />
        </a>
        <nav class="desktop-menu">
            {#each links as link}
                <a href={link.href} class:active={page.url.pathname === link.href}>{link.label}</a>
            {/each}
        </nav>
        <a class="contact" href="/contact">Contact</a>
    </nav>
</header>

<style>
header.topnav {
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    position: sticky;
    top: 0;
    width: 100vw;
    height: 6.25rem;
    z-index: 4;
    background-color: transparent;
    transition: all 0.5s ease;
    color: var(--accent-header);
    will-change: height, background-color;

    @supports (animation-timeline: scroll()) {
        animation: shrink-header linear both;
        animation-timeline: scroll(root);
        animation-range: 50px 100px;
    }

    :global(picture) { 
        display: flex; 
    }

    nav.mobile-nav {
        display: grid;
        grid-template-columns: 20% 1fr;
        width: 95%;
        color: var(--accent-header);
        background: transparent;
        transition: background-color 0.3s ease;

        @media (min-width: 600px) { display: none; }

        .logo { 
            justify-self: start; 
            align-self: center;
            width: 60%;
        }

        .hamburger { 
            justify-self: end; 
        }
    }

    nav.desktop-nav {
        display: none;
        grid-template-columns: 15% 1fr 15%;
        width: 95%;
        justify-self: center;
        color: var(--accent-header);

        @media (min-width: 600px) { display: grid; }

        .logo { max-width: 5rem; justify-self: start; }
        .desktop-menu {
            display: flex;
            justify-content: space-evenly;
            align-items: center;
            gap: 1rem;
            width: 90%;
            max-width: calc-size(fit-content, size + 7rem);
        }
        a {
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: var(--heading-small);
        }
    }

    a:not(.logo) {
        width: 100%;
        padding-block: .7rem;
        border-radius: var(--border-button);
        color: var(--accent-header);

        &.active { color: var(--primary); }
        &:hover { text-decoration: underline; }
        &:focus-visible { background-color: var(--medium-background); }
    }

    a.contact {
        justify-self: center;
        align-self: center;
    }

    button.hamburger {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        justify-content: center;
        border: none;
        background-color: transparent;
        width: fit-content;
        color: var(--accent-header);
        cursor: pointer;

        svg { height: 3em; }
        .line {
            fill: none;
            stroke: var(--accent-header);
            stroke-linecap: round;
            stroke-linejoin: round;
            stroke-width: 3;
        }
        .line-top-bottom { stroke-dasharray: 12 63; }
        &:hover .line { filter: brightness(1.2); }
    }
}

[popover]#mobile-menu {
    inset: 0;
    margin: 0;
    width: 100vw;
    height: 100dvh;
    position: fixed;
    z-index: 10;
    border: none;
    padding: 0;
    background-color: var(--light-background);
    
    opacity: 0;
    transform: translateY(-1.5rem) scale(0.98);
    transition: opacity .35s ease, transform .35s ease, display .35s allow-discrete, overlay .35s allow-discrete;
    transition-behavior: allow-discrete;

    &:popover-open {
        opacity: 1;
        transform: translateY(0);

        @starting-style {
            opacity: 0;
            transform: translateY(-1.5rem) scale(0.98);
        }
    }

    &::backdrop {
        background-color: rgb(0 0 0 / 0);
        transition: background-color .35s ease, display .35s allow-discrete, overlay .35s allow-discrete;
        transition-behavior: allow-discrete;
    }

    &:popover-open::backdrop {
        background-color: rgb(0 0 0 / .35);

        @starting-style {
            background-color: rgb(0 0 0 / 0);
        }
    }

    /* Styling the semantic header inside the popover */
    header.popover-header {
        display: grid;
        grid-template-columns: 20% 1fr;
        width: 95%;
        margin: 0 auto;
        height: 6.25rem; /* Matches your main header height */
        align-items: center;

        .logo {
            justify-self: start; 
            align-self: center;
            width: 60%;
        }

        .close-btn {
            justify-self: end; 
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            justify-content: center;
            border: none;
            background-color: transparent;
            width: fit-content;
            color: var(--accent-header);
            cursor: pointer;

            svg { height: 3em; }
            .line {
                fill: none;
                stroke: var(--accent-header);
                stroke-linecap: round;
                stroke-linejoin: round;
                stroke-width: 3;
            }
            &:hover .line { filter: brightness(1.2); }
        }
    }

    nav.hamburger-menu { 
        display: flex; 
        flex-direction: column; 
        padding: 1rem 2.5%; 
    }

    a:not(.logo) { 
        transition: color .5s ease; 
        padding-left: .5rem;
        font-size: var(--heading-big);
    }
}

</style>