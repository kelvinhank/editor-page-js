# suma-editor

## Introduction

Email render and preview container.

## usage

```sh
$ npm install --save suma-editor
```

or

```sh
$ yarn add suma-editor
```

```js
import React from 'react';
import { BlockManager } from 'suma-editor-base';
import { EmailEditor, EmailEditorProvider } from 'suma-editor';
import 'suma-editor/lib/style.css';

const initialValues = {
  subject: 'Welcome to Easy-email',
  subTitle: 'Nice to meet you!',
  content: BlockManager.getBlockByType(BasicType.PAGE).create({}),
};

export function App() {
  return (
    <EmailEditorProvider
      data={initialValues}
      height={'calc(100vh - 72px)'}
    >
      {({ values }) => {
        return <EmailEditor />;
      }}
    </EmailEditorProvider>
  );
}
```
