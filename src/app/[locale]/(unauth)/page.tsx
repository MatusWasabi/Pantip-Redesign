// import { useTranslations } from 'next-intl';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';

import { GetResponseJson } from '@/components/PantipAPIFetch';

export async function generateMetadata(props: { params: { locale: string } }) {
  const t = await getTranslations({
    locale: props.params.locale,
    namespace: 'Index',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

export default function Index(props: { params: { locale: string } }) {
  unstable_setRequestLocale(props.params.locale);
  // const t = useTranslations('Index');
  GetResponseJson('https://pantip.com/api/forum-service/home/get_sidebar_content');
  GetResponseJson('https://pantip.com/api/forum-service/home/get_tag_hit?limit=10');
  GetResponseJson('https://pantip.com/api/forum-service/forum/room_clubs?room=all&limit=40');
  GetResponseJson('https://pantip.com/api/forum-service/forum/room_bloggang?room=all');
  GetResponseJson('https://pantip.com/api/forum-service/forum/room_pantipmarket?room=all');
  GetResponseJson('https://pantip.com/api/forum-service/home/get_highlight');
  GetResponseJson('https://pantip.com/api/forum-service/forum/get_announce?room=homepage&limit=3');

  return (
    <>
      <p>
        {`Logging API Page `}
      </p>
    </>
  );
}
