
import { ProfessionalUser, SocialUser } from './UserList';
import { AdItem } from './NearbyAds';

// Professional users mock data
export const professionalUsers: ProfessionalUser[] = [
  {
    type: 'professional',
    name: 'Emily Chen',
    title: 'Full Stack Developer',
    company: 'Tech Innovators',
    skills: ['React', 'Node.js', 'MongoDB'],
    location: 'San Francisco, CA',
    distance: '1.5km',
    experience: [
      {
        role: 'Senior Developer',
        company: 'Tech Innovators',
        duration: '2021 - Present',
        description: 'Leading the development of web applications'
      },
      {
        role: 'Developer',
        company: 'CodeCraft',
        duration: '2018 - 2021'
      }
    ],
    socialHandles: [
      {
        platform: 'LinkedIn',
        url: 'https://linkedin.com/in/emilychen',
        username: 'emilychen'
      },
      {
        platform: 'GitHub',
        url: 'https://github.com/emilychen',
        username: 'emilychen'
      }
    ],
    reviews: [
      {
        reviewer: 'David Kim',
        rating: 5,
        comment: 'Emily is an excellent developer with strong problem-solving skills.',
        date: 'January 10, 2023'
      }
    ]
  },
  {
    type: 'professional',
    name: 'James Wilson',
    title: 'Product Manager',
    company: 'Product Vision',
    skills: ['Strategy', 'User Research', 'Agile'],
    location: 'Chicago, IL',
    distance: '800m',
    experience: [
      {
        role: 'Product Manager',
        company: 'Product Vision',
        duration: '2019 - Present',
        description: 'Managing product development lifecycle'
      }
    ],
    socialHandles: [
      {
        platform: 'LinkedIn',
        url: 'https://linkedin.com/in/jameswilson',
        username: 'jameswilson'
      }
    ],
    reviews: [
      {
        reviewer: 'Sophia Martinez',
        rating: 4,
        comment: 'James has a great strategic vision for products.',
        date: 'March 5, 2023'
      }
    ]
  },
  {
    type: 'professional',
    name: 'Sophia Martinez',
    title: 'UX Designer',
    company: 'Creative Solutions',
    skills: ['UI Design', 'Wireframing', 'Prototyping'],
    location: 'Boston, MA',
    distance: '2.3km',
    experience: [
      {
        role: 'UX Designer',
        company: 'Creative Solutions',
        duration: '2020 - Present'
      },
      {
        role: 'UI Designer',
        company: 'Design Studio',
        duration: '2017 - 2020'
      }
    ],
    socialHandles: [
      {
        platform: 'Dribbble',
        url: 'https://dribbble.com/sophiam',
        username: 'sophiam'
      },
      {
        platform: 'LinkedIn',
        url: 'https://linkedin.com/in/sophiamartinez',
        username: 'sophiamartinez'
      }
    ],
    reviews: [
      {
        reviewer: 'James Wilson',
        rating: 5,
        comment: "Sophia's designs are beautiful and functional.",
        date: 'February 12, 2023'
      }
    ]
  }
];

// Social users mock data
export const socialUsers: SocialUser[] = [
  {
    type: 'social',
    name: 'David Kim',
    bio: 'Coffee enthusiast and amateur photographer exploring the city.',
    interests: ['Coffee', 'Photography', 'Urban Exploration'],
    location: 'New York, NY',
    distance: '1.2km',
    socialHandles: [
      {
        platform: 'Instagram',
        url: 'https://instagram.com/davidkim',
        username: 'davidkim'
      }
    ],
    reviews: [
      {
        reviewer: 'Olivia Brown',
        rating: 5,
        comment: 'David knows the best coffee spots in town!',
        date: 'April 3, 2023'
      }
    ]
  },
  {
    type: 'social',
    name: 'Olivia Brown',
    bio: 'Yoga instructor and nutrition coach passionate about wellness.',
    interests: ['Yoga', 'Nutrition', 'Mindfulness'],
    location: 'Austin, TX',
    distance: '3.5km',
    socialHandles: [
      {
        platform: 'Instagram',
        url: 'https://instagram.com/oliviabwellness',
        username: 'oliviabwellness'
      }
    ],
    reviews: [
      {
        reviewer: 'Ethan Taylor',
        rating: 4,
        comment: "Olivia's yoga sessions are super refreshing.",
        date: 'March 15, 2023'
      }
    ]
  },
  {
    type: 'social',
    name: 'Ethan Taylor',
    bio: 'Music producer and vinyl collector. Always looking for new sounds.',
    interests: ['Music Production', 'Vinyl Records', 'Concerts'],
    location: 'Nashville, TN',
    distance: '900m',
    socialHandles: [
      {
        platform: 'SoundCloud',
        url: 'https://soundcloud.com/ethantaylor',
        username: 'ethantaylor'
      },
      {
        platform: 'Instagram',
        url: 'https://instagram.com/ethantmusic',
        username: 'ethantmusic'
      }
    ],
    reviews: [
      {
        reviewer: 'David Kim',
        rating: 5,
        comment: 'Ethan has an amazing taste in music and always finds the best records.',
        date: 'January 28, 2023'
      }
    ]
  }
];

// Local ads mock data
export const localAds: AdItem[] = [
  {
    id: 'ad1',
    title: 'Limited Time: 20% Off Coffee',
    description: 'Visit Brew Heaven within 500m and show this ad for a discount.',
    business: 'Brew Heaven Café',
    location: '300m away',
    expiresIn: '2 hours',
    type: 'both',
    image: '/placeholder.svg'
  },
  {
    id: 'ad2',
    title: 'Co-working Space Special',
    description: 'Free day pass for professionals in the tech industry.',
    business: 'The Productive Space',
    location: '1.2km away',
    expiresIn: '5 hours',
    type: 'professional',
    image: '/placeholder.svg'
  },
  {
    id: 'ad3',
    title: 'Live Music Tonight',
    description: 'Local bands performing with happy hour specials all night!',
    business: 'Rhythm Club',
    location: '800m away',
    expiresIn: '8 hours',
    type: 'social',
    image: '/placeholder.svg'
  }
];
