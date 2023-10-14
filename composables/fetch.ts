import type { UseFetchOptions } from "nuxt/app";
import { defu } from "defu";
import { useAppConfig } from "#imports";

const onResponseError = ({ request, response, error, options }: any) => {
  const toast = useToast();
  if (response._data.statusCode === 403) {
    navigateTo("/auth/login");
  }
  response._data.message.split(";").forEach((msg: string) => {
    toast.add({
      title: "Erreur",
      description: msg,
    });
  });
};

export function myFetch<T>(url: string, options: UseFetchOptions<T> = {}) {
  const config = useAppConfig();
  const defaults: UseFetchOptions<T> = {
    key: url,
    baseURL: config.baseUrl,
    headers: { Authorization: `Bearer ${getToken().value}` },

    onResponseError,
  };
  const params = defu(options, defaults);
  return $fetch(url, params);
}

export function useMyFetch<T>(url: string, options: UseFetchOptions<T> = {}) {
  return useAsyncData(url, () => myFetch(url, options));
}
