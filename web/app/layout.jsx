import './globals.css';
import ModalProvider from '@/components/ModalProvider';
import PageEffects from '@/components/PageEffects';

export const metadata = {
  title: 'CloudEmployee — Direct hire, UK',
  description:
    'Permanent hires, on your payroll. Every candidate interviewed by a senior engineer. Two profiles, not two hundred CVs.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-GB">
      <body className="page" data-dh>
        <ModalProvider>
          {children}
          <PageEffects />
        </ModalProvider>
      </body>
    </html>
  );
}
