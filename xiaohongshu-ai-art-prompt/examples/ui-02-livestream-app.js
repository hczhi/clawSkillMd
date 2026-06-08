/**
 * Example 34: UI Screenshot - Live Streaming App Interface (UI 截图：直播间界面)
 * 
 * Based on Masterclass Chapter 8: UI/UX Design Screenshots
 * Scene Type: Modern live streaming platform interface with interactive elements
 */

const { PromptBuilder } = require('../../prompt-builder.js');

function createLivestreamAppUI() {
  const builder = new PromptBuilder();
  
  // Master Formula for live streaming platform mockup
  builder.useMasterFormula({
    subject: "Android smartphone displaying active live stream with viewer chat overlay,
               gift donation animations floating upward, user profile in corner,
               like heart counter and share button clearly visible",
    scene: "device positioned at slight angle against clean white background with soft shadow suggesting floating presentation,
               subtle glow effect around phone edge implying screen brightness",
    style: "modern mobile streaming platform aesthetic similar to Twitch/Douyin interfaces,
               dark mode theme maximizing video content visibility, material design inspired components",
    lighting: "screen-emitted light illuminating surrounding device area slightly,
               consistent UI element illumination matching dark theme best practices,
               no external shadows interfering with readability",
    composition: "vertical phone layout optimized for portrait live viewing,
               main video occupying 70% of screen top section, chat scroll area bottom third,
               action buttons (gifts/like/share) along right edge for thumb accessibility",
    details: "live indicator red badge in top left corner showing broadcasting status,
              online viewer count '12.5K' prominently displayed below title,
              animated gift rocket icon mid-flight with trail effect, real-time chat bubbles scrolling showing enthusiastic messages,
              donor rank badges next to usernames, emote reactions filling screen occasionally"
  });

  builder.setColorPalette('dark charcoal backgrounds (#1A1A2E), vibrant accent pink (#FF006E),
                         success green (#00D9A5), warning amber (#FFA500),
                         pure white text (#FFFFFF), light gray secondary text (#8B8B93)')
         .setMood ('exciting, engaging, community-driven, energetic, immersive')
         .addTechParams({
           ratio: '9:16', // Vertical live streaming format
           stylize: 220,
           quality: '2',
           version: '6.0'
         })
         .setNegativePrompts([
           'static non-interactive looking interface, missing key streaming features, cluttered overlapping UI elements',
           'watermark, illegible chat text, inconsistent button styles',
           'light mode inappropriate for video viewing, cartoonish icons, outdated skeuomorphic design'
         ]);

  return {
    name: 'Live Streaming Platform UI Mockup',
    category: 'ui_screenshot_livestream',
    zhName: '直播间界面设计',
    description: '现代化直播流媒体平台界面，适合产品演示、主播招募或投资提案',
    masterFormula: {
      subject: "Android phone showing live stream with chat overlay, gifts, profile, likes",
      scene: "slight angle on white background, soft shadow, screen glow effect",
      style: "streaming platform aesthetic (Twitch/Douyin style), dark mode, Material Design",
      lighting: "screen-emitted light only, consistent dark theme optimization",
      composition: "vertical portrait view, video top 70%, chat bottom 30%, actions right edge",
      details: "LIVE badge, viewer count, animated gift rocket, scrolling chat, rank badges"
    },
    prompt: builder.build({ platform: 'xiaohongshu' }),
    useCases: [
      'Live streaming platform product showcases',
      'Streamer portfolio and media kits',
      'Investor pitch for creator economy startups',
      'Marketing materials for influencer partnerships'
    ],
    tips: [
      'Dark mode is standard for video consumption apps',
      'Interactive elements should feel responsive and tactile',
      'Viewer metrics build social proof effectively',
      'Gift animations add excitement and gamification',
      'Right-edge action placement optimizes for right-hand usage'
    ]
  };
}

module.exports = createLivestreamAppUI;
