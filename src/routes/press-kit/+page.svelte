<script>
    import { onMount } from 'svelte';

    // Sample data for images
    const images = [
        { id: 1, src: '../../src/assets/dhanush.jpg', alt: 'Dhanush Kandhan', downloadLink: '../../src/assets/dhanush.jpg' },
        { id: 2, src: '../../src/assets/Dhanu.jpg', alt: 'Dhanush Head shot Pic', downloadLink: '../../src/assets/Dhanu.jpg' },
        // Add more images as needed
    ];

    // Sample data for social links with CDN URLs
    const socialLinks = [
        { id: 1, name: 'Twitter', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/twitter.svg', url: 'https://x.com/itzmedhanu' },
        { id: 2, name: 'LinkedIn', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/linkedin.svg', url: 'https://www.linkedin.com/in/dhanushkandhan/' },
        { id: 3, name: 'GitHub', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/github.svg', url: 'https://github.com/dhanushk-offl' },
        { id: 4, name: 'Instagram', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/instagram.svg', url: 'https://www.instagram.com/itsmedhanushk_' },
        // Add more social links as needed
    ];

    let isDarkTheme = true; // Change to false for light theme

    onMount(() => {
        document.addEventListener('contextmenu', (event) => {
            // @ts-ignore
            if (event.target.tagName !== 'A') event.preventDefault();
        });
    });
</script>
<h1 class="text-3xl font-bold text-gray-800 dark:text-white mb-2 text-center">Press Kit</h1>
<section class="py-12 latte dark:bg-gray-900 select-none dark:mocha">
    <div class="flex flex-col md:flex-row md:space-x-36 justify-center px-4 md:px-0">
        
        <div class="left md:w-1/4 mb-8 md:mb-0">
            <!-- Short Description -->
            <div class="mb-6">
                <h2 class="text-2xl font-bold text-gray-800 dark:text-white mb-2">✍️ Short Bio</h2>
                <p class="text-gray-700 dark:text-gray-300">Research Fellow - AI @Cambridge University | Developer Technology Intern @Nvidia | Ex - Google Intern | Mentor @Naan Mudhalvan Under Govt. of Tamil Nadu | AI Engineer</p>
            </div>

            <!-- Social Links -->
            <div class="mb-6">
                <h2 class="text-2xl font-bold text-gray-800 dark:text-white mb-2">🔗 Social Links</h2>
                <ul class="space-y-2">
                    {#each socialLinks as link}
                        <li>
                            <a href={link.url} target="_blank" rel="noopener noreferrer" class="flex items-center space-x-2 text-gray-700 dark:text-white">
                                <img src={link.logo} alt={link.name} class="w-6 h-6 md:w-8 md:h-8" style="filter: invert(1)" />
                                <span>{link.url}</span>
                            </a>
                        </li>
                    {/each}
                </ul>
            </div>
        </div>

        <!-- Image Gallery (moved to the top in mobile view) -->
        <div class="right max-w-screen-sm mb-8 md:mb-0 md:w-1/2 md:order-last">
            <h2 class="text-xl font-bold text-gray-800 dark:text-white mb-2">📸 Portrait Picture</h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {#each images as image}
                    <div class="relative group">
                        <img src={image.src} alt={image.alt} class="w-full h-auto max-h-60 sm:max-h-80 md:max-h-96 rounded-lg shadow-lg object-cover" />
                        <a href={image.downloadLink} download class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            Download
                        </a>
                    </div>
                {/each}
            </div>
        </div>

        <!-- Biography (moved to the bottom in mobile view) -->
        <div class="left md:w-3/4 md:order-last">
            <div class="mb-6">
                <h2 class="text-2xl font-bold text-gray-800 dark:text-white mb-2">📝 Biography</h2>
                <p class="text-gray-700 dark:text-gray-300">Hey there! 👋 I'm a Developer Technology Intern at Nvidia, passionate about pushing boundaries and crafting innovative solutions. As an AI and Computer Ethics Research Fellow at Cambridge University, I explore technology's ethical dimensions for a mindful future. With past experience at Google, I mentor at Naan Mudhalvan and lead as Technical Regional Leader for UN Youth Volunteers in India. I also host the podcast <a href="https://open.spotify.com/show/7wNAoRcAzNzEf51JhNH3vo" target="_blank" class="text-latte-blue dark:text-ctp-mauve font-bold">Idunammatechu</a>, blending expertise and passion. Armed with a Bachelor's in IT from Anna University, IN, and a Master's in Data Science from MITx, US, I'm eager for new frontiers. Beyond tech, I'm a foodie, Motorhead, and Traveling Explorer, always seeking new adventures. Let's chat over tea and delve into tech wonders and savory discussions! 🍵💻</p>
            </div>
        </div>
    </div>
</section>

<style>
    /* Add some responsive padding and margin adjustments */
    @media (min-width: 769px) {
        .left, .right {
            padding: 0 2rem;
            margin-bottom: 2rem;
        }
    }

    /* Social link color adjustment based on theme */
    .left a {
        color: #000; /* Default color for light theme */
    }

    .dark .left a {
        color: #fff; /* White color for dark theme */
    }
</style>
