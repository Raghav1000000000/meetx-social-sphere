
# MeetX Application Documentation

## Table of Contents
1. [Introduction](#introduction)
2. [Frontend Architecture](#frontend-architecture)
3. [UI/UX Design System](#uiux-design-system)
4. [Component Structure](#component-structure)
5. [State Management](#state-management)
6. [Backend Architecture](#backend-architecture)
7. [Database Schema](#database-schema)
8. [API Endpoints](#api-endpoints)
9. [Authentication & Authorization](#authentication--authorization)
10. [Testing Strategy](#testing-strategy)
11. [Deployment](#deployment)

## Introduction

MeetX is a dual-purpose application that allows users to connect with others in both professional and social contexts. The application features two distinct modes:

- **Professional Mode**: Focused on business networking, job opportunities, and professional growth
- **Social Mode**: Centered on social connections, shared interests, and community building

The application is built with a responsive design, ensuring it works seamlessly across desktop, tablet, and mobile devices.

## Frontend Architecture

### Technology Stack

- **Framework**: React with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn UI
- **Routing**: React Router
- **Notifications**: Sonner Toast

### File Structure

```
src/
├── components/
│   ├── ads/                  # Advertisement components
│   ├── auth/                 # Authentication components
│   ├── cards/                # Card components including ProfileCard
│   ├── discover/             # Discovery page components
│   ├── layout/               # Layout components
│   ├── live/                 # Live streaming components
│   ├── theme/                # Theme components
│   └── ui/                   # Shadcn UI components
├── contexts/                 # React context providers
├── hooks/                    # Custom React hooks
├── lib/                      # Utility functions
├── pages/                    # Page components
└── tests/                    # Test files
```

## UI/UX Design System

### Color Palette

#### Professional Mode
- **Primary**: Blue (#3b82f6) to Teal (#0d9488) gradient
- **Secondary**: Slate (#475569)
- **Accent**: Sky (#0ea5e9)
- **Background**: White (Light mode) / Dark Slate (#1e293b) (Dark mode)

#### Social Mode
- **Primary**: Pink (#ec4899) to Yellow (#eab308) gradient
- **Secondary**: Violet (#8b5cf6)
- **Accent**: Rose (#f43f5e)
- **Background**: White (Light mode) / Dark Slate (#1e293b) (Dark mode)

### Typography

- **Primary Font**: Inter
- **Heading Sizes**:
  - H1: 2rem (32px)
  - H2: 1.5rem (24px)
  - H3: 1.25rem (20px)
  - H4: 1rem (16px)
- **Body Text**: 1rem (16px)
- **Small Text**: 0.875rem (14px)

### Components Design

#### Common Components

1. **Buttons**:
   - Primary: Filled with primary color gradient
   - Secondary: Outlined with primary color
   - Tertiary: Text-only with hover effect

2. **Cards**:
   - Standard padding: 1.5rem
   - Border radius: 0.75rem
   - Shadow: shadow-md
   - Hover effect: Slight scale and shadow increase

3. **Inputs**:
   - Height: 2.5rem
   - Border radius: 0.5rem
   - Focus state: Primary color outline

4. **Navigation**:
   - Navbar height: 4rem
   - Active item: Primary color indicator
   - Mobile: Collapsible menu

#### Animations

- Page transitions: Fade-in (300ms)
- Card entrance: Staggered fade-in
- Button interactions: Scale on hover (105%)
- Mode switching: Cross-fade between color schemes

## Component Structure

### Core Components

#### ProfileCard

The ProfileCard component displays user information in either professional or social mode.

**Props:**
- `type`: 'professional' | 'social'
- `name`: string
- `avatar`: string (optional)
- `location`: string (optional)
- `isLive`: boolean (optional)
- `distance`: string (optional)
- `title`: string (optional, professional)
- `company`: string (optional, professional)
- `skills`: string[] (optional, professional)
- `experience`: Experience[] (optional, professional)
- `interests`: string[] (optional, social)
- `bio`: string (optional, social)
- `socialHandles`: SocialHandle[] (optional)
- `reviews`: ReviewItem[] (optional)
- `onViewProfile`: () => void
- `onConnect`: () => void

**Structure:**
- Header: User info, avatar, location
- Content: Skills/interests, top review
- Footer: Action buttons

#### UserList

Displays a grid of ProfileCard components.

**Props:**
- `users`: User[]
- `onConnect`: (name: string) => void
- `onViewProfile`: () => void

#### NearbyAds

Shows location-based advertisements relevant to the current mode.

**Props:**
- `ads`: AdItem[]
- `mode`: 'professional' | 'social'
- `onViewAd`: (adTitle: string) => void

### Layout Components

#### MainLayout

The wrapper component for all pages, including the navbar and content area.

**Props:**
- `children`: React.ReactNode

#### Navbar

The top navigation bar with app logo, navigation links, and theme toggles.

**Props:**
- None (uses ThemeContext)

#### SidebarNav

Side navigation for profile and settings pages.

**Props:**
- `items`: NavItem[]
- `activeHref`: string

### Theme Components

#### ThemeSwitcher

Toggle between light and dark themes.

**Props:**
- None (uses ThemeContext)

#### ModeSwitcher

Toggle between professional and social modes.

**Props:**
- None (uses ThemeContext)

## State Management

### Contexts

#### ThemeContext

Manages the application theme state.

**Properties:**
- `mode`: 'professional' | 'social'
- `setMode`: (mode: 'professional' | 'social') => void
- `theme`: 'light' | 'dark'
- `setTheme`: (theme: 'light' | 'dark') => void

### Custom Hooks

#### useMobile

Detects if the current viewport is mobile-sized.

**Returns:**
- `isMobile`: boolean

#### useToast

Wrapper for the Sonner toast library.

**Functions:**
- `toast.success(message, options)`
- `toast.error(message, options)`
- `toast.info(message, options)`

## Backend Architecture

### Technology Stack

- **Server**: Node.js with Express
- **API**: RESTful with optional GraphQL
- **Authentication**: JWT-based auth
- **Hosting**: Cloud-based (AWS/GCP/Azure)

### Server Structure

```
server/
├── controllers/           # Request handlers
├── middlewares/           # Express middlewares
├── models/                # Data models
├── routes/                # API routes
├── services/              # Business logic
├── utils/                 # Utility functions
└── server.js              # Entry point
```

### API Design Principles

1. **RESTful Endpoints**: Resources follow REST conventions
2. **Versioning**: API version in URL path (/api/v1/...)
3. **Authentication**: JWT tokens in Authorization header
4. **Rate Limiting**: Prevent abuse with rate limits
5. **Error Handling**: Consistent error response format

## Database Schema

### Users Collection

```javascript
{
  id: String,                // Unique identifier
  email: String,             // User email (unique)
  password: String,          // Hashed password
  name: String,              // Full name
  avatar: String,            // URL to avatar image
  location: {
    type: String,            // Human-readable location
    coordinates: {           // GeoJSON Point
      type: String,
      coordinates: [Number, Number]  // [longitude, latitude]
    }
  },
  professionalProfile: {     // Professional mode profile
    title: String,           // Job title
    company: String,         // Company name
    skills: [String],        // Array of skills
    experience: [{
      role: String,
      company: String,
      duration: String,
      description: String
    }],
    isVisible: Boolean       // If profile is visible in professional mode
  },
  socialProfile: {           // Social mode profile
    bio: String,             // Short biography
    interests: [String],     // Array of interests
    isVisible: Boolean       // If profile is visible in social mode
  },
  socialHandles: [{          // Social media profiles
    platform: String,        // e.g., "LinkedIn", "Twitter"
    url: String,             // Full URL
    username: String         // Handle/username
  }],
  preferences: {             // User preferences
    theme: String,           // "light" or "dark"
    defaultMode: String,     // "professional" or "social"
    notifications: {
      email: Boolean,
      push: Boolean,
      inApp: Boolean
    },
    privacy: {
      showDistance: Boolean,
      allowMessaging: Boolean
    }
  },
  createdAt: Date,
  updatedAt: Date
}
```

### Connections Collection

```javascript
{
  id: String,                // Unique identifier
  requester: String,         // User ID of requester
  recipient: String,         // User ID of recipient
  status: String,            // "pending", "accepted", "rejected"
  mode: String,              // "professional" or "social"
  message: String,           // Optional connection message
  createdAt: Date,
  updatedAt: Date
}
```

### Messages Collection

```javascript
{
  id: String,                // Unique identifier
  conversation: String,      // Conversation ID
  sender: String,            // User ID of sender
  content: String,           // Message content
  contentType: String,       // "text", "image", etc.
  readAt: Date,              // When message was read
  createdAt: Date
}
```

### Conversations Collection

```javascript
{
  id: String,                // Unique identifier
  participants: [String],    // Array of user IDs
  lastMessage: {             // Last message in conversation
    content: String,
    sender: String,
    createdAt: Date
  },
  mode: String,              // "professional" or "social"
  createdAt: Date,
  updatedAt: Date
}
```

### Reviews Collection

```javascript
{
  id: String,                // Unique identifier
  reviewer: String,          // User ID of reviewer
  reviewee: String,          // User ID of person being reviewed
  rating: Number,            // Rating (1-5)
  comment: String,           // Review text
  mode: String,              // "professional" or "social"
  createdAt: Date,
  updatedAt: Date
}
```

### Advertisements Collection

```javascript
{
  id: String,                // Unique identifier
  title: String,             // Ad title
  description: String,       // Ad description
  business: String,          // Business name
  location: {
    type: String,            // Location type
    coordinates: [Number, Number]  // [longitude, latitude]
  },
  image: String,             // URL to ad image
  type: String,              // "professional", "social", or "both"
  expiresAt: Date,           // Expiration date
  radius: Number,            // Visibility radius in meters
  clicks: Number,            // Number of clicks
  views: Number,             // Number of views
  createdAt: Date,
  updatedAt: Date
}
```

## API Endpoints

### Authentication

- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login
- `POST /api/auth/refresh` - Refresh token
- `POST /api/auth/logout` - Logout

### Users

- `GET /api/users/me` - Get current user
- `PUT /api/users/me` - Update current user
- `GET /api/users/:id` - Get user by ID
- `GET /api/users/nearby` - Get nearby users (filtered by mode)

### Connections

- `GET /api/connections` - Get user's connections
- `POST /api/connections` - Request connection
- `PUT /api/connections/:id` - Update connection status
- `DELETE /api/connections/:id` - Remove connection

### Messages

- `GET /api/conversations` - Get user's conversations
- `GET /api/conversations/:id/messages` - Get messages in conversation
- `POST /api/conversations/:id/messages` - Send message
- `PUT /api/conversations/:id/read` - Mark conversation as read

### Advertisements

- `GET /api/ads/nearby` - Get nearby ads (filtered by mode)
- `POST /api/ads` - Create new ad (business accounts)
- `PUT /api/ads/:id` - Update ad
- `DELETE /api/ads/:id` - Delete ad

## Authentication & Authorization

### Authentication Flow

1. **Registration**:
   - User submits email, password, name
   - Server validates data, checks for existing email
   - Password is hashed and stored
   - User record is created
   - Access and refresh tokens are generated and returned

2. **Login**:
   - User submits email and password
   - Server validates credentials
   - Access and refresh tokens are generated and returned

3. **Token Refresh**:
   - Client sends refresh token
   - Server validates refresh token
   - New access token is generated and returned

4. **Authorization**:
   - Client includes access token in Authorization header
   - Server validates token on protected routes
   - Token payload includes user ID and permissions

### Security Measures

1. **Password Security**:
   - Bcrypt hashing with appropriate cost factor
   - Password strength requirements enforced

2. **JWT Configuration**:
   - Short-lived access tokens (15 minutes)
   - Longer-lived refresh tokens (7 days)
   - Secure and HTTPOnly cookie settings

3. **API Security**:
   - HTTPS enforcement
   - CORS configuration
   - Rate limiting
   - Input validation
   - XSS protection

## Testing Strategy

### Frontend Testing

1. **Unit Tests**:
   - Component testing with React Testing Library
   - Hook testing
   - Utility function testing

2. **Integration Tests**:
   - Page component tests
   - Context provider tests
   - Form submission flows

3. **End-to-End Tests**:
   - User flows (registration, login, connection)
   - Mode switching
   - Responsive layout testing

### Backend Testing

1. **Unit Tests**:
   - Service function tests
   - Utility function tests
   - Model validation tests

2. **Integration Tests**:
   - API endpoint tests
   - Database interaction tests
   - Authentication flow tests

3. **Load Testing**:
   - Performance under load
   - Concurrent user simulation
   - API response time benchmarking

## Deployment

### Frontend Deployment

1. **Build Process**:
   - Vite build optimization
   - Asset compression
   - Code splitting

2. **Hosting**:
   - Static site CDN (Cloudflare, Vercel, Netlify)
   - Global distribution
   - Edge caching

### Backend Deployment

1. **Environment**:
   - Containerized with Docker
   - Orchestration with Kubernetes or similar
   - Auto-scaling configuration

2. **Database**:
   - Managed database service
   - Backup strategy
   - Replication for high availability

3. **Monitoring**:
   - Performance metrics
   - Error tracking
   - User analytics
   - Server health monitoring

### CI/CD Pipeline

1. **Continuous Integration**:
   - Automated testing on commit
   - Code quality checks
   - Type checking

2. **Continuous Deployment**:
   - Automated deployment to staging
   - Manual promotion to production
   - Rollback capability

3. **Environment Management**:
   - Development, staging, and production environments
   - Environment-specific configurations
   - Secret management
