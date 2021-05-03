import Link from 'next/link';
import unified from 'unified';
import parse from 'remark-parse';
import remark2react from 'remark-react';

export function CustomLink({ children, href }) {
  // If the link is local it will start with a "/"
  // Otherwise it'll be something like "https://"
  // eslint-disable-next-line react/prop-types
  return href.startsWith('/') || href === '' ? (
    <Link href={href}>
      <a>
        {children}
      </a>
    </Link>
  ) : (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
}


export function PrintMarkdown({ markdown }) {
   const content = unified()
     .use(parse)
     .use(remark2react, {
       remarkReactComponents: {
         a: CustomLink,
       },
     })
     .processSync(markdown).result;
 
   return (
     <div>
       {content}
     </div>
   );
 }