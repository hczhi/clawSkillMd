/**
 * Example 33: UI Screenshot - Social Media App Interface (UI 截图：社交类 App 界面)
 * 
 * Based on Masterclass Chapter 8: UI/UX Design Screenshots
 * Scene Type: Modern mobile social networking app with clean aesthetic
 */

const { PromptBuilder } = require('../../prompt-builder.js');

function createSocialMediaAppUI() {
  const builder = new PromptBuilder();
  
  // Master Formula for social media app interface mockup
  builder.useMasterFormula({
    subject: "iOS-style smartphone displaying vibrant social media feed interface with user posts,
               profile picture, like buttons and comment sections clearly visible",
    scene: "device floating against soft gradient background from rose gold to pale peach, subtle drop shadow creating depth,
               minimalist composition emphasizing the screen content without distraction",
    style: "clean modern iOS design aesthetic, neumorphic elements subtly integrated, high-fidelity UI mockup quality,
               Apple Human Interface Guidelines compliant visual language",
    lighting: "soft even ambient studio lighting eliminating harsh device reflections, subtle highlight along phone edges suggesting premium build quality",
    composition: "vertical phone mockup centered in frame following golden ratio proportions, screen content filling maximum viewable area,
               safe margins preserved for status bar and home indicator areas showing authentic iOS behavior",
    details: "post cards showing rounded corners with light shadows, interactive like heart icons in gradient red-pink,
              smooth scroll indicators at screen bottom showing additional content below, notification badge with number on navigation icon,
              time display 9:41 AM typical of tech mockups, WiFi and battery indicators in top right corner"
  });

  builder.setColorPalette('white card backgrounds (#FFFFFF), soft gray text (#6B7280),
                         primary action blue (#007AFF), accent pink (#FF2D55),
                         neutral UI grays throughout')
         .setMood ('clean, modern, approachable, trustworthy, engaging')
         .addTechParams({
           ratio: '9:16', // Phone screen aspect ratio
           stylize: 200, // Moderate for professional UI work
           quality: '2',
           version: '6.0'
         })
         .setNegativePrompts([
           'cluttered interface, overlapping elements, illegible text blocks',
           'watermark, inconsistent spacing, Windows/Mac OS styled windows instead of mobile',
           'too many competing colors, cartoonish UI elements, non-responsive design appearance'
         ]);

  return {
    name: 'Social Media App UI Mockup',
    category: 'ui_screenshot_social_app',
    zh_name: '社交类 App 界面',
    description: '现代移动社交应用界面设计，适合产品提案、投资演示或开发者作品集展示',
    masterFormula: {
      subject: "iOS smartphone displaying social media feed with posts, likes, comments",
      scene: "gradient rose gold to peach background, subtle drop shadow, minimal distraction",
      style: "clean iOS design, neumorphic elements, high-fidelity mockup, HIG compliance",
      lighting: "even studio lighting, edge highlights suggesting premium build",
      composition: "centered vertical phone mockup, golden ratio proportions, safe margins shown",
      details: "rounded post cards, gradient heart icons, scroll indicators, notification badge, 9:41 AM time"
    },
    prompt: builder.build({ platform: 'xiaohongshu' }),
    useCases: [
      'Startup pitch deck materials',
      'Product portfolio showcases',
      'Investor presentation slides',
      'UX case study documentation'
    ],
    tips: [
      'Use authentic device frames (iPhone/android) for credibility',
      'Status bar information adds realism to mockups',
      'Consistent spacing demonstrates thoughtful UX design',
      'Interactive states (hover/active) show thoughtfulness',
      'High contrast ensures accessibility consideration is present'
    ]
  };
}

module.exports = createSocialMediaAppUI;
