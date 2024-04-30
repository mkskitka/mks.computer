
import {
    de_bio,
    aa_bio,
    animation_bio, 
    generative_design_bio, 
    cant_write_up,
    wild_birds_bio,
    cc_bio,
    photobooth_bio,
    crt_bio,
    evidence_bio,
    spam_bio, 
    flora_bio,
    dreamcube_writeup, 
    drift_bottle_writeup,
    stitch_it_bio,
    creampods_ai_bio, 
    blob_bio
} from "./writeups";


export const projects = [
    {
        id: "blob",
        title: "Yaniqueque Logo",
        description: "",
        writeup: blob_bio,
        tags: ["WEB"],
        thumbnail_url: "thumbnail.png",
        project_path: "projects/blob/",
        media:['logo.mov'],
        media_dimensions: [ "3:3:.15", "9:16:.21","4:4:.3", "3:3:.15"],
        left_top: [ "58%:8%", "30%:10%","63%:35%", "75%:0%"],
        coming_soon: false,
        date: "Mar '24"
    },
    {
        id: "CAI",
        title: "Creampods AI",
        description: "",
        writeup: creampods_ai_bio,
        tags: ["A_V"],
        thumbnail_url: "thumbnail.gif",
        project_path: "projects/cai/",
        media:[],
        coming_soon: false,
        date: "Mar '24"
    },
        {
        id: "SIT",
        title: "Stitch It Together",
        description: "",
        writeup: stitch_it_bio,
        tags: ["WEB"],
        thumbnail_url: "thumbnail.png",
        project_path: "projects/sit/",
        media:[],
        coming_soon: false,
        date: "Mar - May '24"
    },
    {
        id: "spam",
        title: "Devolving Spam",
        description: "#",
        writeup: spam_bio,
        tags: [""],
        link: "https://hudsonweekly.com/spamtember-unveils-playful-creativity-a-humorous-exploration-of-cultural-identity-at-all-street-gallery/",
        link_name: "SPAMtember",
        thumbnail_url: "thumbnail.png",
        project_path: "projects/spam/",
        media:["spam.mov", "install.jpg", "digital.png", "explode.mov"],
        media_dimensions: [ "3:3:.15", "9:16:.21","4:4:.3", "3:3:.15"],
        left_top: [ "58%:8%", "30%:10%","63%:35%", "75%:0%"],
        date: "Sept '23"
    },
    {
        id: "flora",
        title: "Flora.ai",
        description: "",
        writeup: flora_bio,
        tags: ["WEB"],
        link: "https://www.florafauna.ai",
        link_name: "www.florafauna.ai",
        thumbnail_url: "thumbnail.png",
        project_path: "projects/flora/",
        media:["flora_demo.mp4", "comingsoon.gif"],
        media_dimensions: ["16:9:.7", "8:5:.1"],
        left_top: [ "28%:8%", "70%:60%"],
        date: "Jan '24 -"
    },
    {
        id: "evidence71",
        title: "Evidence 71",
        description: "",
        writeup: evidence_bio,
        tags: ["WEB"],
        link: "https://www.theshed.org/program/series/15-open-call",
        link_name: "visit the free open call exhibition",
        thumbnail_url: "thumbnail.png",
        project_path: "projects/evidence/",
        media:[ "integration.jpg","app_demo.mp4","user_demo.mov", "opencall.jpg"],
        media_dimensions: [ "6:4:.30", "16:9:.5","2.25:4:.15", "2.5:4:.155"],
        left_top: [ "58%:8%", "35%:45%","33%:5%","28%:23%"],
        date: "August '23 - "
    },
    {
        id: "WB",
        title: "Wild Birds",
        description: "",
        writeup: wild_birds_bio, 
        tags: ["A_V"],
        thumbnail_url: "thumbnail.png",
        project_path: "projects/wild_birds/",
        media:['pamorama.mov','band.jpg', /*'/projects/wild_birds/1.png',*/ 'flier.gif','djs.mov',],
        media_dimensions: ["16:9:.40", "16:9:.30", /*"3.4:4:.1",*/"3.4:4:.2","16:9:.30"],
        left_top: ["32%:5%", "32%:55%",/*"13%:65%",*/"68%:34%","35%:59%"],
        date: "Sept '23 - October '23",
    },
    {
        id: "CRT",
        title: "Untitled (CRT)",
        description: "interactive installation",
        writeup: crt_bio,
        tags: ["A_V"],
        thumbnail_url: "3.gif",
        project_path: "projects/tv/",
        media: ['1.mp4',"phone.png", "2.png", "preshow.jpg"],
        media_dimensions:["16:9:.55", "2:4:.12","4:4:.2", "4:4:.14"],
        left_top: ["32%:5%", "72%:35%", "22%:55%", "40%:73%"],
        date: "Feb - May '22",
        sound: true,
    },
    {
        id: "DE",
        title: "Drunk Elephant Kiosk",
        description: "hair care quiz installation",
        writeup: de_bio,
        tags: ["WEB"],
        thumbnail_url: "thumbnail.png",
        project_path:"projects/de/",
        media: ['installation.mov',  'smoothie.mov', 'explode.mov'],
        media_dimensions: ["16:9:.28", "16:9:.30", "16:9:.30"],
        left_top: [,"46%:45%", "32%:5%", "35%:10%"],
        date: "Feb '23 -"
    },
    {
        id: "IPB",
        title: "Interactive Photobooth",
        description: "",
        writeup: photobooth_bio,
        tags: ["A_V", "WEB"],
        thumbnail_url: "thumbnail.jpg",
        project_path:"projects/photo_booth/",
        media:["reel.jpg", "dancing.mov","full_group.jpg","network.jpg","instructions.png"],
        media_dimensions:["2:3.7:.2", "2:3.55:.25","4.5:3:.2","4:3:.20","3.5:4.5:.15"],
        left_top: ["30%:5%", "60%:10%", "33%:10%","20%:35%","13%:58%"],
        date: "August '23"
    },
    {
        id: "CC",
        title: "Creative Coding",
        description: "",
        writeup: cc_bio,
        link: "https://vimeo.com/827330129",
        link_name: "thesis presentation",
        tags: ["research"],
        thumbnail_url: "run.gif",
        project_path: "projects/cc/",
        // mk_codes.mp4 not loading on mobile
        media:["loop.mov", "demo.mp4","portraits.png", "MK_codes.mp4", "parts.jpg"],
        left_top: ["30%:2%", "30%:52%", "72%:11%","70%:15%", "68%:20%"],
        media_dimensions:["16:9:.4","16:9:.4","5:2.6:.25", "5.2:2.9:.25", "5.2:2.9:.25"],
        date: "Sept '22 - May '23",
        sound: true,
    },
    {
        id: "dreamcube",
        title: "Dreamcube",
        description: "",
        writeup: dreamcube_writeup,
        tags: ["A_V"],
        link: "https://www.localprojects.com/work/corporate-experience/dreamcube/",
        link_name: "localproject dreamcube",
        thumbnail_url: "thumbnail.jpg",
        project_path: "projects/dreamcube/",
        media:["diary.mp4", "im.mp4", "tedy.jpg", "wide.jpg"],
        media_dimensions: ["16:9:.3", "16:9:.3", "16:9:.3", "16:9:.3"],
        left_top: [ "30%:8%", "62%:50%", "30%:50%", "62%:8%"],
        date: "September 22' - December 22'"
    },

    {
        id: "AA",
        title: "After Afghanistan",
        description: "stories of Afghan refugees",
        writeup: aa_bio,
        link: "https://www.afterafghanistan.org/",
        link_name: "visit website",
        tags: ["WEB"],
        project_path:"projects/after_afghanistan/",
        thumbnail_url: "aa.gif",
        media:['aa.mov'],
        media_dimensions:["14.3:9:.55"],
        left_top: ["32%:15%"],
        date: "August - December '22",
    },
    { 
        id: "td",
        title: "Touch Designer Sketches",
        description: "",
        writeup: "",
        link: "https://www.instagram.com/mk__hacks?igsh=bnE2MnQ4amczbmFo",
        link_name: "see more sketches at my instagram",
        project_path: "projects/td/",
        thumbnail_url: "thumbnail.png",
        tags: [""],
        media:['landscapes.mp4'],
        media_dimensions:["4:3:.6"],
        left_top: ["35%:5%"],
    },
    {
        id: "db",
        title: "Drift Bottle",
        description: "",
        writeup: drift_bottle_writeup,
        tags: ["A_V"],
        link: "",
        link_name: "",
        thumbnail_url: "thumbnail.png",
        project_path: "projects/db/",
        media:["drift.mp4", "5.jpg"],
        media_dimensions: ["16:9:.5", "8:5:.2"],
        left_top: [ "35%:8%", "70%:60%"],
        date: "Jan 15th -",
        sound: true
    },
    {
        id: "LC",
        title: "Live Coding",
        description: "",
        writeup: "Performance Documentation as RGB__TEARS",
        link: [ "https://www.instagram.com/reel/CzrG1RkBH4e/?igsh=YXZ5M2Q3dHZodzY2" , "https://www.instagram.com/tv/Cqesl8AIs9L/?igsh=MXRuY3E1MDdyZzRqeg==", "https://www.instagram.com/p/CqHETkpsJa1/?igsh=N3d4a2pzaHh2YTQ4", "https://www.instagram.com/p/ClJk2AjuNyb/?igsh=eXRrc3N3eHpla3pt", "https://www.instagram.com/p/CkBdgLGAjlm/?igsh=MWVsc3o2a3d0bnZ6cQ%3D%3D", "https://www.instagram.com/p/Ci7N4GaOycf/"],
        link_name: [ "Wonderville (Audio) - April 23", "Wonderville (Audio) - April 23", "ITP NYU Bathroom Rave (Visuals/Installation) - Dec 22", "Wonderville (Visuals) - Nov 22", "Wonderville (Visuals) - Oct 22", "WildBirds (Visuals) - Sept 22", ],
        tags: ["research", "A_V"],
        project_path:"projects/lc/",
        thumbnail_url: "thumbnail.png",
        media:["group.jpg", "lc.gif"],
        media_dimensions: ["5:8:.25", "5:8:.25"],
        left_top: [ "35%:8%", "65%:8%"],
        coming_soon: false,
        date: "Sept '22 -"
    },
    {
        id: "CD",
        title: "Cantaloupe Dadaism",
        description: "AI Fashion Look Book",
        writeup: cant_write_up,
        github: null, 
        link: "https://mkskitka.notion.site/Canteloupe-Diadism-0c1d532fe464430a86ae3c13b804fda5",
        link_name: "project_info",
        tags: [],
        thumbnail_url: "cd_thumbnail.png",
        project_path:"projects/cd/",
        media:["cd.png"],
        media_dimensions: ["18:5:.65"],
        left_top: ["30%:30%"],
        date: "November '21"
    },
    {
        id: "AR",
        title: "Animation Reel",
        description: "Sample of animation pieces",
        writeup: animation_bio,
        tags: [],
        thumbnail_url: "projects/ar/thumbnail.png",
        project_path:"",
        media:['/videos/AnimationReel.mov'],
        media_dimensions:["16:9:.55"],
        left_top: ["32%:15%"],
        date: "November '19 -"

    },
    { 
        id: "full_web",
        title: "Complete Web Portfolio",
        description: "",
        writeup: "",
        link: "https://www.notion.so/mkskitka/Web-Development-Portfolio-a54fe05efa6c4e2db0b1e077c9c0952e?pvs=4",
        link_name: "complete portfolio",
        project_path: "projects/full_web/",
        thumbnail_url: "thumbnail.png",
        tags: ["WEB"],
        media:[]
    }, 
    
    // {
    //     id: "WC",
    //     title: "WALKING CHOREO",
    //     description: "",
    //     writeup: "coming soon.",
    //     tags: ["research"],
    //     thumbnail_url: "thumbnail.png",
    //     project_path: "projects/wc/",
    //     media:[],
    //     coming_soon: false,
    //     date: "Jan '23 -"
    // },
]

export const ASSET_CAPTIONS = {
    "integration.jpg": "integration testing with touch screen at the Shed",
    "app_demo.mov": "weighted network graph visualization of archive", 
    "user_demo.mov": "user interacting with digital archive",
    "pamorama.mov": "3-wall projecton mapping set up",
    'band.jpg': "Yasser Tejeda sound check, pre-show", 
    'flier.gif': "Wild Birds show flier",
    'djs.mov': "Yalla Yalla Party Proejct Dj's performing",
    'explode.mov' : "users select from options in a a hair quiz. Custom text explode animations were added to create a more engaging design.",
    'smoothie.gif': "at the end of the quiz user receives custom hair formula recommendation",
    'installation.mov': "a user taking hair quiz",
    "reel.jpg": "example photo output from photobooth", 
    "dancing.mov": "users dancing infront of screen display",
    "full_group.jpg": "screenshot of larger group photo output",
    "network.jpg": "touch desinger network used to control photobooth displays",
    "instructions.png": "instructions displayed next to photobooth display. Instructions were meant to make usage as easy as possible for users."
}





