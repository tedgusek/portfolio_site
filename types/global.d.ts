import { links } from '@/content/links';
import { footerLinks } from '@/content/footerLinks';

declare global {
    type SectionName = (typeof links)[number]['name'];
    type SectionNameFooter = (typeof footerLinks)[number]['name'];
}