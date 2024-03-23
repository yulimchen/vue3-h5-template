declare namespace I18nType {
  type LangType = "zh-cn" | "en";

  interface Schema {
    demo: {
      description: string;
      tabbar: {
        home: string;
        tools: string;
        about: string;
      };
      details: {
        vue3: string;
        typescript: string;
        vant: string;
        tailwindcss: string;
        pinia: string;
        darkmode: string;
        i18n: string;
        router: string;
        icon: string;
        vw: string;
        axios: string;
        gzip: string;
        mock: string;
        eslint: string;
        loading: string;
        eruda: string;
      };
    };
    tools: {
      successBtn: string;
      errorBtn: string;
      reqOK: string;
      reqErr: string;
    };
  }

  type GetI18nKey<
    T extends Record<string, unknown>,
    K extends keyof T = keyof T
  > = K extends string
    ? T[K] extends Record<string, unknown>
      ? `${K}.${GetI18nKey<T[K]>}`
      : K
    : never;

  type I18nKey = GetI18nKey<Schema>;
}
