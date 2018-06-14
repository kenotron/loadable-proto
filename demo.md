## What are some of the terms

* PLT - page load time
* PLT 1 - page load time, without caches or service worker
* PLT 2 - PLT with cache (service worker, potentially which downloads resources in background, making app available offline)
* Time to First Paint - when do you first see the app? (demo how to capture this)
* Time to Interactive - harder to measure, but you can feel it when the app isn't responsive even if it's rendered
---
## Time = Money :: Performance = Revenue

* https://www.thinkwithgoogle.com/feature/mobile/

## How to save time?
* Shave download time (bytes over wire, BOW)
* Shave processing time (render speed, amount of JS to parse & JIT)
---
## Focusing this Demo on "Shave Download Time"    

* Webpack maintains a dependency graph in memory of all of the JS modules
* Webpack 3 introduced a feature called "Tree Shaking" or dead code removal

```
// Before Tree-Shaking, every dev has to remember to import specifics
import {Button} from 'office-ui-fabric-react/lib/components/Button';

// Fabric 6.0 gave us ability to do this:
import {Button} from 'office-ui-fabric-react';
```
---

## Demo of "Happy Little Button" Page - Chrome at "Fast 3G"
* React is NOT in the bundle
* Fabric 5.x
    * 60kb gzipped
    * 1.28s d/l

* Fabric 6.x with Tree Shaking (on by default in Webpack 4, production mode)
    * 56kb gzipped
    * 1.23s d/l

* Async Loader - no code change, auto code split components that are behind user interaction like context menus
    * 45kb gzipped
    * 1.1s d/l

## Conclusions

* Fabric is huge - lots of low hanging fruit for cutting size
* 1/4 - 1/3 of app boot code comes from Fabric
* 