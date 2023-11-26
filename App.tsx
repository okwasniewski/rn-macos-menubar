import React from 'react';
import {MenuBarExtraItem, MenubarExtraView} from 'react-native-menubar-extra';

function App(): JSX.Element {
  return (
    <MenubarExtraView title="Menubar app" icon="car">
      <MenuBarExtraItem
        title="Hey!"
        icon="iphone"
        onItemPress={() => {
          console.log('Hey!');
        }}
      />
      <MenuBarExtraItem title="Button 2!" icon="car" />
    </MenubarExtraView>
  );
}

export default App;
