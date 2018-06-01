import React from 'react';
import Loadable from 'react-loadable';

export const ContextualMenu = Loadable({
    loader: async() => (await import('office-ui-fabric-react/lib/ContextualMenu')).ContextualMenu,
    loading() {
        return <div>Loading...</div>
    }
});