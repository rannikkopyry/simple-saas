import Form from 'components/Form';
import { getForms } from 'utils/supabase-client';
import { Forms }  from 'types';
import { GetStaticPropsResult } from 'next';

interface Props {
  forms: Forms[];
}

export default function FormPage({ forms }: Props) {
  return <Form forms={forms}/>;
}

export async function getStaticProps(): Promise<GetStaticPropsResult<Props>> {
  const forms = await getForms();

  return {
    props: {
      forms: forms
    },
    revalidate: 60
  };
}