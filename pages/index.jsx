
import React from 'react';
import { DefaultSeo } from 'next-seo';

function Index() {
  return (
    <div>
      <DefaultSeo
        title="Test Seo Index"
        titleTemplate='%s | Next SEO'
        description="Minha descrição"
        twitter={{
          cardType: 'summary_large_image',
        }}
      />
      <h1>Index Brazil</h1>
    </div>
  );
}

export default Index;