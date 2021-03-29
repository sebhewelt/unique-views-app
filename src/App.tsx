import React, { useState } from "react";

import { FileUploader } from "components/FileUploader";
import { Table } from "components/Table";
import { Header } from "components/Header";
import { getFileReader } from "utils/getFileReader";
import { getViews } from "utils/getViews";
import { DataDisplayableFormatType } from "types";

export const App = () => {
  const [
    viewsPerPath,
    setViewsPerPath,
  ] = useState<null | DataDisplayableFormatType>(null);
  const [
    uniqueViewsPerPath,
    setUniqueViewsPerPath,
  ] = useState<null | DataDisplayableFormatType>(null);
  const parseData = (uploadedFile: File) => {
    const reader = getFileReader(uploadedFile);
    reader.onloadend = () => {
      const fileByLine = String(reader.result).split(/\r\n|\n/);
      const { views, uniqueViews } = getViews(fileByLine);
      setViewsPerPath(views);
      setUniqueViewsPerPath(uniqueViews);
    };
  };

  return (
    <>
      <Header />
      <main>
        <FileUploader acceptTypes={["text/*", ".log"]} parseData={parseData} />
        {viewsPerPath && (
          <Table title="Views total (webpage)" data={viewsPerPath} />
        )}
        {uniqueViewsPerPath && (
          <Table
            title="Unique views total (webpage)"
            data={uniqueViewsPerPath}
          />
        )}
      </main>
    </>
  );
};
