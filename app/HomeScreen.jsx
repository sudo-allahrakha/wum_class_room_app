import React from "react";

import * as eva from "@eva-design/eva";
import { ApplicationProvider, Layout, Text } from "@ui-kitten/components";

export default function HomeScreen() {
  return (
    <>
      <Layout
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      >
        <Text category="h1">HOME</Text>
      </Layout>
    </>
  );
}
