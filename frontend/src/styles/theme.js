import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    background: {
      default: '#121212',  // Dark background for a modern dark mode effect
      paper: '#1e1e1e',    // Slightly lighter background for secondary sections
    },
    primary: {
      main: '#1976d2',     // Deep blue for primary actions (strong and professional)
      contrastText: '#fff' // White text for contrast
    },
    secondary: {
      main: '#00bcd4',     // Soft cyan for secondary actions (bright and fresh)
      contrastText: '#fff' // White text for contrast
    },
    error: {
      main: '#f44336',     // Red for error states (clear visibility)
    },
    text: {
      primary: '#e0e0e0',  // Light gray for primary text (easy readability on dark background)
      secondary: '#b0b0b0', // Medium gray for secondary text
    },
    action: {
      active: '#00bcd4',    // Active state for icons in cyan
    },
  },
  typography: {
    fontFamily: `'Poppins', sans-serif`, // A modern sans-serif font for a professional touch
    h1: {
      fontWeight: 700,
      fontSize: '3rem',
      color: '#1976d2',   // Blue for main headings
    },
    h2: {
      fontWeight: 600,
      fontSize: '2.5rem',
      color: '#1976d2',   // Blue for secondary headings
    },
    h3: {
      fontWeight: 500,
      fontSize: '2rem',
      color: '#00bcd4',   // Cyan for tertiary headings
    },
    body1: {
      fontSize: '1rem',
      color: '#e0e0e0',  // Light gray for body text
    },
    body2: {
      fontSize: '0.875rem',
      color: '#b0b0b0',  // Medium gray for smaller body text
    },
    button: {
      textTransform: 'none', // Normal case for button text
      fontWeight: 600,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '12px', // Rounded corners for buttons
          padding: '12px 24px',
          transition: 'all 0.3s ease',
          '&:hover': {
            boxShadow: '0px 6px 18px rgba(0, 0, 0, 0.2)', // Soft shadow on hover
            transform: 'scale(1.05)', // Slight scaling effect on hover
          },
        },
        containedPrimary: {
          backgroundColor: '#1976d2', // Deep blue for primary button
          '&:hover': {
            backgroundColor: '#1565c0', // Darker blue on hover
          },
        },
        containedSecondary: {
          backgroundColor: '#00bcd4', // Cyan for secondary button
          '&:hover': {
            backgroundColor: '#0097a7', // Darker cyan on hover
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '12px', // Rounded corners for cards
          boxShadow: '0px 6px 18px rgba(0, 0, 0, 0.1)', // Soft shadow for depth
          padding: '20px',
          backgroundColor: '#1e1e1e', // Dark gray for cards
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiInputBase-root': {
            borderRadius: '10px', // Rounded text fields
            backgroundColor: '#333', // Dark background for input fields
            color: '#e0e0e0', // Light text inside text fields
          },
        },
      },
    },
    MuiTable: {
      styleOverrides: {
        root: {
          '& th': {
            backgroundColor: '#333', // Dark background for table headers
            color: '#e0e0e0', // Light gray for header text
            fontWeight: 600,
          },
          '& td': {
            color: '#b0b0b0', // Medium gray for table data
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#1976d2', // Deep blue for the app bar
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)', // Soft shadow for app bar
        },
      },
    },
  },
  shape: {
    borderRadius: 12, // Rounded corners for a modern feel
  },
  shadows: [
    'none',
    '0px 6px 18px rgba(0, 0, 0, 0.2)', // Light shadow for components
    // Additional shadows as needed
  ],
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});

export default theme;
