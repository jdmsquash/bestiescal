# Friends Social Calendar Website

A simple, monochromatic website to display our friend group's shared Google Calendar.

## Setup Instructions

1. **Google Calendar Setup**
   - Go to your Google Calendar
   - Click the three dots next to your calendar name → "Settings and sharing"
   - Under "Access permissions," make sure "Make available to public" is checked
   - Scroll down to "Integrate calendar" and copy the Calendar ID
   - Replace `REPLACE_WITH_YOUR_CALENDAR_ID` in the `index.html` file with your actual Calendar ID

2. **Website Customization**
   - Edit the events in the "Upcoming Events Highlights" section
   - Update the contact email
   - Change the date in the footer when making updates

## Deployment with Cloudflare Pages

1. Push this repository to GitHub
2. Log in to your Cloudflare dashboard
3. Go to Pages → Create a project → Connect to Git
4. Select this repository
5. Configure your build settings (for this static site, you can use the defaults)
6. Deploy!

## Making Future Updates

1. Clone the repository to your local machine
2. Make your changes to the HTML or CSS files
3. Commit and push your changes to GitHub
4. Cloudflare Pages will automatically deploy the updated site
