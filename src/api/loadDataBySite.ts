'use server';
import { SearchResult } from '@root/interfaces/api';

export const loadDataBySite = async (domain: string, count: number) => {
  const data = await fetch(`${process.env.API_URL}/infections/_search`, {
    body: JSON.stringify({
      domains: [domain],
      root_domains: [domain],
      app_domains: [domain],
      email_domains: [domain],
      ips: [domain],
      size: count,
    }),
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.API_KEY}`,
    },
  });
  const resBody = await data.json();
  if (data.status === 422) {
    return resBody.details[0].msg as string
  }
  return resBody as unknown as SearchResult;
};
