import { Project, Skill, ThemeColor } from './types';

export const HERO_TEXT = {
  greeting: "PUMPFUN_PIXEL_STUDIO",
  role: "$PPP_TOKEN",
  description: "Live pixel-art PFP studio for Pumpfun culture. 1/1s drawn on stream + free CC0 commons. Target: Get Alon to switch his PFP."
};

export const SKILLS: Skill[] = [
  { id: 1, name: "CREATIVITY", level: 100, icon: "🎨", color: 'red' as any },
  { id: 2, name: "CC0 COMMONS", level: 100, icon: "🔓", color: 'green' as any },
  { id: 3, name: "COMMUNITY", level: 100, icon: "🤝", color: 'blue' as any },
  { id: 4, name: "MISSION", level: 1, icon: "🎯", color: 'purple' as any }, // Level 1 until Alon switches
];

// Reusing 'Project' type for Build Cards
export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "15_BASE_PFPS",
    description: "Pre-launch starter pack. Pumpfun-themed base PFPs (CC0). Seed the look.",
    techStack: ["Art", "CC0", "Base"],
    status: "completed",
    stars: 15
  },
  {
    id: 2,
    title: "LIVE_STREAM_DRAWS",
    description: "1/1 PFPs drawn live. Comment prompts, get pixels. Public boss quest.",
    techStack: ["Twitch", "OBS", "Pixel"],
    status: "in-progress",
    stars: 100
  },
  {
    id: 3,
    title: "THE_ALON_QUEST",
    description: "Main Mission: Make Alon switch his PFP to a PPP-made PFP. A public boss quest for CT.",
    techStack: ["Social", "Raid", "X"],
    status: "in-progress",
    stars: 9000
  },
  {
    id: 4,
    title: "BUILD_CARDS_UI",
    description: "Website, borders, generators, banners, stickers. No strict roadmap, just shipping.",
    techStack: ["React", "UI/UX", "Tools"],
    status: "in-progress",
    stars: 50
  }
];

export const GALLERY_ASSETS = [
    { id: 'pfp_1', name: '01_adoration_cupid.png', url: 'https://thumbs4.imagebam.com/e6/cd/c9/ME19ZG34_t.png' },
    { id: 'pfp_2', name: '02_anger_fiery.png', url: 'https://thumbs4.imagebam.com/24/cd/c9/ME19ZG35_t.png' },
    { id: 'pfp_3', name: '03_big_chungus.png', url: 'https://thumbs4.imagebam.com/94/48/76/ME19ZG36_t.png' },
    { id: 'pfp_4', name: '04_big_chungus_alt.png', url: 'https://thumbs4.imagebam.com/9b/81/0b/ME19ZG37_t.png' },
    { id: 'pfp_5', name: '05_cheems.png', url: 'https://thumbs4.imagebam.com/e5/a4/24/ME19ZG38_t.png' },
    { id: 'pfp_6', name: '06_libya_jird.png', url: 'https://thumbs4.imagebam.com/f0/f4/9b/ME19ZG39_t.png' },
    { id: 'pfp_7', name: '07_pepe_suit.png', url: 'https://thumbs4.imagebam.com/00/71/2e/ME19ZG3A_t.png' },
    { id: 'pfp_8', name: '08_rage_red.png', url: 'https://thumbs4.imagebam.com/27/7c/18/ME19ZG3B_t.png' },
    { id: 'pfp_9', name: '09_saudi_thobe.png', url: 'https://thumbs4.imagebam.com/bc/fa/97/ME19ZG3C_t.png' },
    { id: 'pfp_10', name: '10_shrek.png', url: 'https://thumbs4.imagebam.com/a4/e3/ac/ME19ZG3D_t.png' },
    { id: 'pfp_11', name: '11_slenderman.png', url: 'https://thumbs4.imagebam.com/a6/fb/48/ME19ZG3E_t.png' },
    { id: 'pfp_12', name: '12_stonks_man.png', url: 'https://thumbs4.imagebam.com/5c/fc/b9/ME19ZG3F_t.png' },
    { id: 'pfp_13', name: '13_success_kid.png', url: 'https://thumbs4.imagebam.com/b8/82/21/ME19ZG3G_t.png' },
    { id: 'pfp_14', name: '14_tricera_ops.png', url: 'https://thumbs4.imagebam.com/64/9a/91/ME19ZG3H_t.png' },
    { id: 'pfp_15', name: '15_wojak_guy.png', url: 'https://thumbs4.imagebam.com/70/8b/c7/ME19ZG3I_t.png' },
];

export const SYSTEM_INSTRUCTION = `
You are the Studio Assistant for PumpfunPixel (PPP).
Mission: Create pixel art for Pumpfun culture and get Alon (Pumpfun CEO) to switch his PFP.
Style: VS Code Terminal, technical but artistic.
Explain that we ship via "Build Cards", not a strict roadmap.
We offer Free CC0 commons and 1/1 live draws.
If asked about the roadmap, list the Build Cards.
If asked about the token ($PPP), say it powers the studio.
`;