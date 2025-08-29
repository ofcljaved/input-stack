# Progressive Input Stack

A beautifully animated multi-step form with fluid transitions and progressive input stacking. Experience seamless user guidance through elegant motion design that keeps important information accessible while creating delightful visual transitions.

## ✨ Features

- **Progressive Input Stacking** - Smooth cascading animations where completed inputs slide down progressively
- **Multi-Step Form Flow** - Seamless progression through name, email, and reminder steps
- **Fluid Motion Design** - Elegant transitions using CSS transforms with scale and translate effects
- **Smart Navigation** - Contextual back/next buttons that adapt based on current step
- **Visual Hierarchy** - Completed inputs remain visible with reduced opacity and scale
- **Responsive Design** - Clean, centered layout that works across all device sizes
- **Pure CSS Animations** - Hardware-accelerated transitions using Tailwind CSS utilities

## 🎭 Live Demo

Link: [https://input-stack.vercel.app/](https://input-stack.vercel.app/)

Experience the progressive input stacking in action! Watch as inputs gracefully cascade down with each step, creating a beautiful visual flow that guides users through the form process.

## 🏗️ Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with enhanced metadata
│   ├── page.tsx            # Main page with progressive input stack
│   └── globals.css         # Global styles and Tailwind configuration
├── components/
│   ├── ui/
│   │   ├── button.tsx      # Reusable button component
│   │   ├── input.tsx       # Styled input component
│   │   └── switch.tsx      # Toggle switch component
│   └── navigatiing-btn.tsx # Navigation button component
└── lib/
    └── utils.ts            # Utility functions and class merging
```

## 🎨 How It Works

### Progressive Input Stacking
The form uses absolute positioning with dynamic transform calculations:
- **Active Input**: Current step input at `translate-y-0` with full scale and opacity
- **Completed Inputs**: Each completed input moves down by 8px (half rem) for each step passed
- **Upcoming Inputs**: Future inputs wait above with `-translate-y-8` and fade out

### Animation Logic
```typescript
const stepsPassed = currentStep - index;
if (stepsPassed > 1) {
  transformClass = "translate-y-4 scale-92 pointer-events-none";
} else {
  transformClass = "translate-y-2 scale-96 pointer-events-none";
}
```

### Step Progression
1. **Step 1**: Name input visible at center
2. **Step 2**: Name slides down to 8px, email appears at center
3. **Step 3**: Name slides down to 16px, email at 8px, reminder at center

## 🎯 Component Architecture

### Main Page Component
- Manages form state and current step using React hooks
- Renders dynamic step content with absolute positioning
- Calculates transform classes based on step progression

### Input Components
- **Text Inputs**: Standard input fields for name and email
- **Switch Component**: Toggle for reminder preference
- **Navigation**: Contextual back/next buttons with smooth transitions

### Animation System
- **Duration**: 400ms transitions for smooth movement
- **Easing**: Custom ease function for natural motion
- **Scale Effects**: Completed inputs scale to 92-96% for visual hierarchy
- **Pointer Events**: Disabled on completed inputs to prevent interaction

## 🎨 CSS Animation Techniques

### Transform Classes
```css
/* Active state */
transformClass = "translate-y-0 scale-100 opacity-100"

/* Completed states */
transformClass = "translate-y-2 scale-96 pointer-events-none"  /* 1 step passed */
transformClass = "translate-y-4 scale-92 pointer-events-none"  /* 2+ steps passed */

/* Upcoming state */
transformClass = "-translate-y-8 scale-110 opacity-0"
```

### Transition Properties
```css
transition-all duration-400 ease
```

### Layout Structure
```css
.relative h-10  /* Container height for consistent stacking */
.absolute w-full /* Full-width positioning for inputs */
```

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd input-stack
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   bun install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   bun dev
   ```

4. **Open your browser** and navigate to `http://localhost:3000`

## 🎨 Customization

### Adjusting Animation Speed
Modify the transition duration in the transform classes:
```css
duration-300  /* Faster animations */
duration-500  /* Slower animations */
```

### Changing Stack Spacing
Adjust the translate values for different spacing:
```typescript
const translateY = stepsPassed * 3; // 12px spacing instead of 8px
```

### Modifying Scale Effects
Customize the scale values for completed inputs:
```typescript
transformClass = `translate-y-${translateY} scale-90`; // More dramatic scaling
```



## 🌟 What Makes This Special

This project demonstrates the power of progressive disclosure through motion design:
- **Visual Continuity**: Users never lose context of previous inputs
- **Smooth Transitions**: Elegant animations that guide attention naturally
- **Accessible Design**: Important information remains visible throughout the process
- **Creative Motion**: Unique stacking effect that enhances user experience
- **Performance Optimized**: Pure CSS animations with hardware acceleration

## 🎯 Use Cases

Perfect for:
- **Multi-step forms** requiring user guidance
- **Onboarding flows** with progressive information disclosure
- **Wizard interfaces** that need visual continuity
- **Interactive tutorials** with step-by-step progression
- **Any form** where maintaining context is important
