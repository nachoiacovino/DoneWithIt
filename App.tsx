import React, { useState } from 'react';

import ImageInputList from './app/components/ImageInputList';
import Screen from './app/components/Screen';

export default function App() {
  const [imageUris, setImageUris] = useState<string[]>([]);

  const handleAdd = (uri: string) => setImageUris([...imageUris, uri]);

  const handleRemove = (uri: string) =>
    setImageUris(imageUris.filter((imgUri) => imgUri !== uri));

  return (
    <Screen>
      <ImageInputList
        uris={imageUris}
        onAddImage={handleAdd}
        onRemoveImage={handleRemove}
      />
    </Screen>
  );
}
