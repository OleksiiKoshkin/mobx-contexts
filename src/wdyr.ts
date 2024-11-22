/// <reference types="@welldone-software/why-did-you-render" />
import React from 'react';

const {default: wdyr} = await import('@welldone-software/why-did-you-render');

wdyr(React, {
    include: [/.*/],
    trackHooks: true,
    trackAllPureComponents: true,
});
