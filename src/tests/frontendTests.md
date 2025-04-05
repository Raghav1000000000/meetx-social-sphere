
# MeetX Frontend Test Cases

## 1. Theme Switching Tests

### 1.1 Dark/Light Mode Toggle
- **Description**: Verify the dark/light mode toggle works correctly
- **Steps**:
  1. Navigate to any page in the application
  2. Locate the theme toggle in the top navbar
  3. Click the toggle to switch between light and dark mode
  4. Observe the entire app's theme changing
- **Expected Results**: The application should seamlessly switch between light and dark themes with appropriate color changes for all elements

### 1.2 Professional/Social Mode Toggle
- **Description**: Verify switching between professional and social modes
- **Steps**:
  1. Navigate to the home page (Index)
  2. Locate the mode toggle buttons
  3. Switch between professional and social modes
  4. Navigate to other pages (Discover, Profile)
- **Expected Results**: 
  - The application's color scheme should update to reflect the selected mode
  - Professional mode should use blue/teal color scheme
  - Social mode should use pink/yellow color scheme
  - The selected mode should persist across page navigation

### 1.3 Mode Persistence
- **Description**: Verify that user's theme preferences are persisted
- **Steps**:
  1. Select a specific mode (professional/social)
  2. Select a specific theme (light/dark)
  3. Refresh the browser
- **Expected Results**: The application should remember the user's theme and mode preferences after refresh

## 2. Home Page Tests

### 2.1 Home Page Content
- **Description**: Verify home page content changes based on selected mode
- **Steps**:
  1. Navigate to the home page
  2. Switch between professional and social modes
- **Expected Results**: 
  - The hero text, description, and feature cards should update to show mode-specific content
  - Professional mode should show business-oriented features
  - Social mode should show social connection features

### 2.2 Navigation
- **Description**: Verify all navigation links on the home page work correctly
- **Steps**:
  1. Click on "Go Live" button
  2. Return to home page
  3. Click on "Discover People" button
  4. Return to home page
  5. Click on each feature card's action button
- **Expected Results**: Each link should navigate to the correct page

## 3. Profile Card Tests

### 3.1 Profile Card Details
- **Description**: Verify profile cards display all required information
- **Steps**:
  1. Navigate to the Discover page
  2. Examine profile cards in both professional and social modes
- **Expected Results**: 
  - Professional cards should display name, title, company, skills, location
  - Social cards should display name, bio, interests, location
  - Both types should show distance if available

### 3.2 Expanded Profile Details
- **Description**: Verify "Show more details" functionality
- **Steps**:
  1. Navigate to the Discover page
  2. Find a profile card and click "Show more details"
  3. Check for experience, social media handles, and reviews
  4. Click "Show less" to collapse the details
- **Expected Results**: 
  - Clicking "Show more details" should expand the card to reveal additional information
  - The additional information should include experience (for professional), social handles, and reviews
  - Clicking "Show less" should collapse the expanded section

### 3.3 Connection Request
- **Description**: Verify connection request functionality
- **Steps**:
  1. Navigate to the Discover page
  2. Find a profile card and click the "Connect" button
- **Expected Results**: A toast notification should appear confirming the connection request was sent

## 4. Discover Page Tests

### 4.1 Mode Synchronization
- **Description**: Verify that switching modes on the Discover page updates the global mode
- **Steps**:
  1. Navigate to the Discover page
  2. Switch between Professional and Social tabs
  3. Navigate to another page
- **Expected Results**: 
  - The mode selected on the Discover page should update the global application mode
  - The selected mode should persist when navigating to other pages

### 4.2 Relevant Ads
- **Description**: Verify that ads shown are relevant to the current mode
- **Steps**:
  1. Navigate to the Discover page in Professional mode
  2. Observe the ads shown in the "Nearby Opportunities" section
  3. Switch to Social mode
  4. Observe if the ads change
- **Expected Results**: 
  - In Professional mode, only professional and both-type ads should appear
  - In Social mode, only social and both-type ads should appear

### 4.3 Ad Interaction
- **Description**: Verify that ad interactions trigger appropriate feedback
- **Steps**:
  1. Navigate to the Discover page
  2. Click on an ad in the "Nearby Opportunities" section
- **Expected Results**: A toast notification should appear confirming the ad interaction

## 5. Profile Page Tests

### 5.1 Mode-Specific Profiles
- **Description**: Verify that Profile page shows mode-appropriate content
- **Steps**:
  1. Set the application to Professional mode
  2. Navigate to the Profile page and go to "Preview Cards" tab
  3. Observe which cards are visible
  4. Switch to Social mode
  5. Observe if the visible cards change
- **Expected Results**: 
  - In Professional mode, the professional card should be prominently displayed
  - In Social mode, the social card should be prominently displayed

### 5.2 Profile Card Preview
- **Description**: Verify profile card previews match the actual cards in the Discover page
- **Steps**:
  1. Navigate to the Profile page and view the card previews
  2. Navigate to the Discover page and compare with actual cards
- **Expected Results**: The format and style of preview cards should match the cards shown in the Discover page

## 6. Responsive Design Tests

### 6.1 Mobile Responsiveness
- **Description**: Test application layout on mobile screen sizes
- **Steps**:
  1. Resize browser to mobile dimensions (or use device emulation)
  2. Navigate through all main pages: Home, Discover, Profile
- **Expected Results**: 
  - All pages should be fully usable on mobile
  - Elements should reflow appropriately for smaller screens
  - No horizontal scrolling should be required

### 6.2 Tablet Responsiveness
- **Description**: Test application layout on tablet screen sizes
- **Steps**:
  1. Resize browser to tablet dimensions (or use device emulation)
  2. Navigate through all main pages
- **Expected Results**: Layout should adapt properly to the medium screen size with appropriate grid layouts

### 6.3 Desktop Responsiveness
- **Description**: Test application layout on large desktop screens
- **Steps**:
  1. View the application on a large desktop monitor
  2. Navigate through all main pages
- **Expected Results**: Layout should make good use of the available space without excessive stretching or empty areas

## 7. Visual Regression Tests

### 7.1 Theme Consistency
- **Description**: Verify visual consistency across themes and modes
- **Steps**:
  1. Take screenshots of key pages in all four combinations (Professional/Light, Professional/Dark, Social/Light, Social/Dark)
  2. Compare padding, margins, and spacing across all variations
- **Expected Results**: Layout measurements should remain consistent regardless of theme or mode

### 7.2 Animation Tests
- **Description**: Verify that animations work smoothly across devices and browsers
- **Steps**:
  1. Load the home page and observe entrance animations
  2. Navigate to the Discover page and observe card animations
  3. Test hover effects on interactive elements
- **Expected Results**: All animations should play smoothly without glitches

## 8. Performance Tests

### 8.1 Initial Load Time
- **Description**: Measure time to fully load and render the initial page
- **Steps**:
  1. Clear browser cache
  2. Use browser developer tools to measure load time
  3. Record Time to First Byte, First Contentful Paint, and Time to Interactive
- **Expected Results**: Initial page should load within acceptable performance benchmarks

### 8.2 Navigation Performance
- **Description**: Measure responsiveness when navigating between pages
- **Steps**:
  1. Navigate through all main pages in sequence
  2. Measure time between navigation action and complete page render
- **Expected Results**: Page transitions should feel instantaneous (<300ms)

### 8.3 Interaction Performance
- **Description**: Measure responsiveness of interactive elements
- **Steps**:
  1. Interact with buttons, toggles, and expanding/collapsing elements
  2. Observe any delay between action and response
- **Expected Results**: UI should respond immediately to user interactions with no perceptible lag

## 9. Accessibility Tests

### 9.1 Keyboard Navigation
- **Description**: Verify all functionality is accessible via keyboard
- **Steps**:
  1. Navigate the entire application using only keyboard (Tab, Enter, Space, Arrow keys)
  2. Attempt to access all features and interactive elements
- **Expected Results**: All functionality should be accessible without requiring a mouse

### 9.2 Screen Reader Compatibility
- **Description**: Test application with a screen reader
- **Steps**:
  1. Enable a screen reader (e.g., VoiceOver, NVDA)
  2. Navigate through main pages
  3. Interact with cards, buttons, and toggles
- **Expected Results**: All content and functionality should be properly announced by the screen reader

### 9.3 Color Contrast
- **Description**: Verify sufficient color contrast for text readability
- **Steps**:
  1. Use contrast checking tools in both light and dark modes
  2. Check primary text, secondary text, and button labels
- **Expected Results**: All text should meet WCAG AA contrast requirements (4.5:1 for normal text, 3:1 for large text)

## 10. Cross-Browser Tests

### 10.1 Chrome Compatibility
- **Description**: Verify full functionality in Chrome
- **Steps**: Complete a standard user flow through all main pages
- **Expected Results**: All features should work correctly with proper styling

### 10.2 Firefox Compatibility
- **Description**: Verify full functionality in Firefox
- **Steps**: Complete a standard user flow through all main pages
- **Expected Results**: All features should work correctly with proper styling

### 10.3 Safari Compatibility
- **Description**: Verify full functionality in Safari
- **Steps**: Complete a standard user flow through all main pages
- **Expected Results**: All features should work correctly with proper styling

### 10.4 Edge Compatibility
- **Description**: Verify full functionality in Edge
- **Steps**: Complete a standard user flow through all main pages
- **Expected Results**: All features should work correctly with proper styling
