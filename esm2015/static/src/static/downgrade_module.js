/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { platformBrowser } from '@angular/platform-browser';
import * as angular from '../common/angular1';
import { $INJECTOR, $PROVIDE, DOWNGRADED_MODULE_COUNT_KEY, INJECTOR_KEY, LAZY_MODULE_REF, UPGRADE_APP_TYPE_KEY, UPGRADE_MODULE_NAME } from '../common/constants';
import { getDowngradedModuleCount, isFunction } from '../common/util';
import { angular1Providers, setTempInjectorRef } from './angular1_providers';
import { NgAdapterInjector } from './util';
/** @type {?} */
let moduleUid = 0;
/**
 * \@description
 *
 * A helper function for creating an AngularJS module that can bootstrap an Angular module
 * "on-demand" (possibly lazily) when a {\@link downgradeComponent downgraded component} needs to be
 * instantiated.
 *
 * *Part of the [upgrade/static](api?query=upgrade/static) library for hybrid upgrade apps that
 * support AoT compilation.*
 *
 * It allows loading/bootstrapping the Angular part of a hybrid application lazily and not having to
 * pay the cost up-front. For example, you can have an AngularJS application that uses Angular for
 * specific routes and only instantiate the Angular modules if/when the user visits one of these
 * routes.
 *
 * The Angular module will be bootstrapped once (when requested for the first time) and the same
 * reference will be used from that point onwards.
 *
 * `downgradeModule()` requires either an `NgModuleFactory` or a function:
 * - `NgModuleFactory`: If you pass an `NgModuleFactory`, it will be used to instantiate a module
 *   using `platformBrowser`'s {\@link PlatformRef#bootstrapModuleFactory bootstrapModuleFactory()}.
 * - `Function`: If you pass a function, it is expected to return a promise resolving to an
 *   `NgModuleRef`. The function is called with an array of extra {\@link StaticProvider Providers}
 *   that are expected to be available from the returned `NgModuleRef`'s `Injector`.
 *
 * `downgradeModule()` returns the name of the created AngularJS wrapper module. You can use it to
 * declare a dependency in your main AngularJS module.
 *
 * {\@example upgrade/static/ts/lite/module.ts region="basic-how-to"}
 *
 * For more details on how to use `downgradeModule()` see
 * [Upgrading for Performance](guide/upgrade-performance).
 *
 * \@usageNotes
 *
 * Apart from `UpgradeModule`, you can use the rest of the `upgrade/static` helpers as usual to
 * build a hybrid application. Note that the Angular pieces (e.g. downgraded services) will not be
 * available until the downgraded module has been bootstrapped, i.e. by instantiating a downgraded
 * component.
 *
 * <div class="alert is-important">
 *
 *   You cannot use `downgradeModule()` and `UpgradeModule` in the same hybrid application.<br />
 *   Use one or the other.
 *
 * </div>
 *
 * ### Differences with `UpgradeModule`
 *
 * Besides their different API, there are two important internal differences between
 * `downgradeModule()` and `UpgradeModule` that affect the behavior of hybrid applications:
 *
 * 1. Unlike `UpgradeModule`, `downgradeModule()` does not bootstrap the main AngularJS module
 *    inside the {\@link NgZone Angular zone}.
 * 2. Unlike `UpgradeModule`, `downgradeModule()` does not automatically run a
 *    [$digest()](https://docs.angularjs.org/api/ng/type/$rootScope.Scope#$digest) when changes are
 *    detected in the Angular part of the application.
 *
 * What this means is that applications using `UpgradeModule` will run change detection more
 * frequently in order to ensure that both frameworks are properly notified about possible changes.
 * This will inevitably result in more change detection runs than necessary.
 *
 * `downgradeModule()`, on the other side, does not try to tie the two change detection systems as
 * tightly, restricting the explicit change detection runs only to cases where it knows it is
 * necessary (e.g. when the inputs of a downgraded component change). This improves performance,
 * especially in change-detection-heavy applications, but leaves it up to the developer to manually
 * notify each framework as needed.
 *
 * For a more detailed discussion of the differences and their implications, see
 * [Upgrading for Performance](guide/upgrade-performance).
 *
 * <div class="alert is-helpful">
 *
 *   You can manually trigger a change detection run in AngularJS using
 *   [scope.$apply(...)](https://docs.angularjs.org/api/ng/type/$rootScope.Scope#$apply) or
 *   [$rootScope.$digest()](https://docs.angularjs.org/api/ng/type/$rootScope.Scope#$digest).
 *
 *   You can manually trigger a change detection run in Angular using {\@link NgZone#run
 *   ngZone.run(...)}.
 *
 * </div>
 *
 * \@publicApi
 * @template T
 * @param {?} moduleFactoryOrBootstrapFn
 * @return {?}
 */
export function downgradeModule(moduleFactoryOrBootstrapFn) {
    /** @type {?} */
    const lazyModuleName = `${UPGRADE_MODULE_NAME}.lazy${++moduleUid}`;
    /** @type {?} */
    const lazyModuleRefKey = `${LAZY_MODULE_REF}${lazyModuleName}`;
    /** @type {?} */
    const lazyInjectorKey = `${INJECTOR_KEY}${lazyModuleName}`;
    /** @type {?} */
    const bootstrapFn = isFunction(moduleFactoryOrBootstrapFn) ?
        moduleFactoryOrBootstrapFn :
        (extraProviders) => platformBrowser(extraProviders).bootstrapModuleFactory(moduleFactoryOrBootstrapFn);
    /** @type {?} */
    let injector;
    // Create an ng1 module to bootstrap.
    angular.module(lazyModuleName, [])
        .constant(UPGRADE_APP_TYPE_KEY, 3 /* Lite */)
        .factory(INJECTOR_KEY, [lazyInjectorKey, identity])
        .factory(lazyInjectorKey, () => {
        if (!injector) {
            throw new Error('Trying to get the Angular injector before bootstrapping the corresponding ' +
                'Angular module.');
        }
        return injector;
    })
        .factory(LAZY_MODULE_REF, [lazyModuleRefKey, identity])
        .factory(lazyModuleRefKey, [
        $INJECTOR,
        ($injector) => {
            setTempInjectorRef($injector);
            /** @type {?} */
            const result = {
                needsNgZone: true,
                promise: bootstrapFn(angular1Providers).then(ref => {
                    injector = result.injector = new NgAdapterInjector(ref.injector);
                    injector.get($INJECTOR);
                    return injector;
                })
            };
            return result;
        }
    ])
        .config([
        $INJECTOR, $PROVIDE,
        ($injector, $provide) => {
            $provide.constant(DOWNGRADED_MODULE_COUNT_KEY, getDowngradedModuleCount($injector) + 1);
        }
    ]);
    return lazyModuleName;
}
/**
 * @template T
 * @param {?} x
 * @return {?}
 */
function identity(x) {
    return x;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG93bmdyYWRlX21vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIuLi8uLi8uLi8iLCJzb3VyY2VzIjpbInBhY2thZ2VzL3VwZ3JhZGUvc3RhdGljL3NyYy9zdGF0aWMvZG93bmdyYWRlX21vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQVNBLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQztBQUUxRCxPQUFPLEtBQUssT0FBTyxNQUFNLG9CQUFvQixDQUFDO0FBQzlDLE9BQU8sRUFBQyxTQUFTLEVBQUUsUUFBUSxFQUFFLDJCQUEyQixFQUFFLFlBQVksRUFBRSxlQUFlLEVBQUUsb0JBQW9CLEVBQUUsbUJBQW1CLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQztBQUMvSixPQUFPLEVBQWdDLHdCQUF3QixFQUFFLFVBQVUsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBRW5HLE9BQU8sRUFBQyxpQkFBaUIsRUFBRSxrQkFBa0IsRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBQzNFLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLFFBQVEsQ0FBQzs7QUFHekMsSUFBSSxTQUFTLEdBQUcsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBc0ZsQixNQUFNLFVBQVUsZUFBZSxDQUMzQiwwQkFDK0Q7O0lBQ2pFLE1BQU0sY0FBYyxHQUFHLEdBQUcsbUJBQW1CLFFBQVEsRUFBRSxTQUFTLEVBQUUsQ0FBQzs7SUFDbkUsTUFBTSxnQkFBZ0IsR0FBRyxHQUFHLGVBQWUsR0FBRyxjQUFjLEVBQUUsQ0FBQzs7SUFDL0QsTUFBTSxlQUFlLEdBQUcsR0FBRyxZQUFZLEdBQUcsY0FBYyxFQUFFLENBQUM7O0lBRTNELE1BQU0sV0FBVyxHQUFHLFVBQVUsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDLENBQUM7UUFDeEQsMEJBQTBCLENBQUMsQ0FBQztRQUM1QixDQUFDLGNBQWdDLEVBQUUsRUFBRSxDQUNqQyxlQUFlLENBQUMsY0FBYyxDQUFDLENBQUMsc0JBQXNCLENBQUMsMEJBQTBCLENBQUMsQ0FBQzs7SUFFM0YsSUFBSSxRQUFRLENBQVc7O0lBR3ZCLE9BQU8sQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFLEVBQUUsQ0FBQztTQUM3QixRQUFRLENBQUMsb0JBQW9CLGVBQXNCO1NBQ25ELE9BQU8sQ0FBQyxZQUFZLEVBQUUsQ0FBQyxlQUFlLEVBQUUsUUFBUSxDQUFDLENBQUM7U0FDbEQsT0FBTyxDQUNKLGVBQWUsRUFDZixHQUFHLEVBQUU7UUFDSCxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2IsTUFBTSxJQUFJLEtBQUssQ0FDWCw0RUFBNEU7Z0JBQzVFLGlCQUFpQixDQUFDLENBQUM7U0FDeEI7UUFDRCxPQUFPLFFBQVEsQ0FBQztLQUNqQixDQUFDO1NBQ0wsT0FBTyxDQUFDLGVBQWUsRUFBRSxDQUFDLGdCQUFnQixFQUFFLFFBQVEsQ0FBQyxDQUFDO1NBQ3RELE9BQU8sQ0FDSixnQkFBZ0IsRUFDaEI7UUFDRSxTQUFTO1FBQ1QsQ0FBQyxTQUFtQyxFQUFFLEVBQUU7WUFDdEMsa0JBQWtCLENBQUMsU0FBUyxDQUFDLENBQUM7O1lBQzlCLE1BQU0sTUFBTSxHQUFrQjtnQkFDNUIsV0FBVyxFQUFFLElBQUk7Z0JBQ2pCLE9BQU8sRUFBRSxXQUFXLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUU7b0JBQ2pELFFBQVEsR0FBRyxNQUFNLENBQUMsUUFBUSxHQUFHLElBQUksaUJBQWlCLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO29CQUNqRSxRQUFRLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO29CQUV4QixPQUFPLFFBQVEsQ0FBQztpQkFDakIsQ0FBQzthQUNILENBQUM7WUFDRixPQUFPLE1BQU0sQ0FBQztTQUNmO0tBQ0YsQ0FBQztTQUNMLE1BQU0sQ0FBQztRQUNOLFNBQVMsRUFBRSxRQUFRO1FBQ25CLENBQUMsU0FBbUMsRUFBRSxRQUFpQyxFQUFFLEVBQUU7WUFDekUsUUFBUSxDQUFDLFFBQVEsQ0FBQywyQkFBMkIsRUFBRSx3QkFBd0IsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztTQUN6RjtLQUNGLENBQUMsQ0FBQztJQUVQLE9BQU8sY0FBYyxDQUFDO0NBQ3ZCOzs7Ozs7QUFFRCxTQUFTLFFBQVEsQ0FBVSxDQUFJO0lBQzdCLE9BQU8sQ0FBQyxDQUFDO0NBQ1YiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7SW5qZWN0b3IsIE5nTW9kdWxlRmFjdG9yeSwgTmdNb2R1bGVSZWYsIFN0YXRpY1Byb3ZpZGVyfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7cGxhdGZvcm1Ccm93c2VyfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcblxuaW1wb3J0ICogYXMgYW5ndWxhciBmcm9tICcuLi9jb21tb24vYW5ndWxhcjEnO1xuaW1wb3J0IHskSU5KRUNUT1IsICRQUk9WSURFLCBET1dOR1JBREVEX01PRFVMRV9DT1VOVF9LRVksIElOSkVDVE9SX0tFWSwgTEFaWV9NT0RVTEVfUkVGLCBVUEdSQURFX0FQUF9UWVBFX0tFWSwgVVBHUkFERV9NT0RVTEVfTkFNRX0gZnJvbSAnLi4vY29tbW9uL2NvbnN0YW50cyc7XG5pbXBvcnQge0xhenlNb2R1bGVSZWYsIFVwZ3JhZGVBcHBUeXBlLCBnZXREb3duZ3JhZGVkTW9kdWxlQ291bnQsIGlzRnVuY3Rpb259IGZyb20gJy4uL2NvbW1vbi91dGlsJztcblxuaW1wb3J0IHthbmd1bGFyMVByb3ZpZGVycywgc2V0VGVtcEluamVjdG9yUmVmfSBmcm9tICcuL2FuZ3VsYXIxX3Byb3ZpZGVycyc7XG5pbXBvcnQge05nQWRhcHRlckluamVjdG9yfSBmcm9tICcuL3V0aWwnO1xuXG5cbmxldCBtb2R1bGVVaWQgPSAwO1xuXG4vKipcbiAqIEBkZXNjcmlwdGlvblxuICpcbiAqIEEgaGVscGVyIGZ1bmN0aW9uIGZvciBjcmVhdGluZyBhbiBBbmd1bGFySlMgbW9kdWxlIHRoYXQgY2FuIGJvb3RzdHJhcCBhbiBBbmd1bGFyIG1vZHVsZVxuICogXCJvbi1kZW1hbmRcIiAocG9zc2libHkgbGF6aWx5KSB3aGVuIGEge0BsaW5rIGRvd25ncmFkZUNvbXBvbmVudCBkb3duZ3JhZGVkIGNvbXBvbmVudH0gbmVlZHMgdG8gYmVcbiAqIGluc3RhbnRpYXRlZC5cbiAqXG4gKiAqUGFydCBvZiB0aGUgW3VwZ3JhZGUvc3RhdGljXShhcGk/cXVlcnk9dXBncmFkZS9zdGF0aWMpIGxpYnJhcnkgZm9yIGh5YnJpZCB1cGdyYWRlIGFwcHMgdGhhdFxuICogc3VwcG9ydCBBb1QgY29tcGlsYXRpb24uKlxuICpcbiAqIEl0IGFsbG93cyBsb2FkaW5nL2Jvb3RzdHJhcHBpbmcgdGhlIEFuZ3VsYXIgcGFydCBvZiBhIGh5YnJpZCBhcHBsaWNhdGlvbiBsYXppbHkgYW5kIG5vdCBoYXZpbmcgdG9cbiAqIHBheSB0aGUgY29zdCB1cC1mcm9udC4gRm9yIGV4YW1wbGUsIHlvdSBjYW4gaGF2ZSBhbiBBbmd1bGFySlMgYXBwbGljYXRpb24gdGhhdCB1c2VzIEFuZ3VsYXIgZm9yXG4gKiBzcGVjaWZpYyByb3V0ZXMgYW5kIG9ubHkgaW5zdGFudGlhdGUgdGhlIEFuZ3VsYXIgbW9kdWxlcyBpZi93aGVuIHRoZSB1c2VyIHZpc2l0cyBvbmUgb2YgdGhlc2VcbiAqIHJvdXRlcy5cbiAqXG4gKiBUaGUgQW5ndWxhciBtb2R1bGUgd2lsbCBiZSBib290c3RyYXBwZWQgb25jZSAod2hlbiByZXF1ZXN0ZWQgZm9yIHRoZSBmaXJzdCB0aW1lKSBhbmQgdGhlIHNhbWVcbiAqIHJlZmVyZW5jZSB3aWxsIGJlIHVzZWQgZnJvbSB0aGF0IHBvaW50IG9ud2FyZHMuXG4gKlxuICogYGRvd25ncmFkZU1vZHVsZSgpYCByZXF1aXJlcyBlaXRoZXIgYW4gYE5nTW9kdWxlRmFjdG9yeWAgb3IgYSBmdW5jdGlvbjpcbiAqIC0gYE5nTW9kdWxlRmFjdG9yeWA6IElmIHlvdSBwYXNzIGFuIGBOZ01vZHVsZUZhY3RvcnlgLCBpdCB3aWxsIGJlIHVzZWQgdG8gaW5zdGFudGlhdGUgYSBtb2R1bGVcbiAqICAgdXNpbmcgYHBsYXRmb3JtQnJvd3NlcmAncyB7QGxpbmsgUGxhdGZvcm1SZWYjYm9vdHN0cmFwTW9kdWxlRmFjdG9yeSBib290c3RyYXBNb2R1bGVGYWN0b3J5KCl9LlxuICogLSBgRnVuY3Rpb25gOiBJZiB5b3UgcGFzcyBhIGZ1bmN0aW9uLCBpdCBpcyBleHBlY3RlZCB0byByZXR1cm4gYSBwcm9taXNlIHJlc29sdmluZyB0byBhblxuICogICBgTmdNb2R1bGVSZWZgLiBUaGUgZnVuY3Rpb24gaXMgY2FsbGVkIHdpdGggYW4gYXJyYXkgb2YgZXh0cmEge0BsaW5rIFN0YXRpY1Byb3ZpZGVyIFByb3ZpZGVyc31cbiAqICAgdGhhdCBhcmUgZXhwZWN0ZWQgdG8gYmUgYXZhaWxhYmxlIGZyb20gdGhlIHJldHVybmVkIGBOZ01vZHVsZVJlZmAncyBgSW5qZWN0b3JgLlxuICpcbiAqIGBkb3duZ3JhZGVNb2R1bGUoKWAgcmV0dXJucyB0aGUgbmFtZSBvZiB0aGUgY3JlYXRlZCBBbmd1bGFySlMgd3JhcHBlciBtb2R1bGUuIFlvdSBjYW4gdXNlIGl0IHRvXG4gKiBkZWNsYXJlIGEgZGVwZW5kZW5jeSBpbiB5b3VyIG1haW4gQW5ndWxhckpTIG1vZHVsZS5cbiAqXG4gKiB7QGV4YW1wbGUgdXBncmFkZS9zdGF0aWMvdHMvbGl0ZS9tb2R1bGUudHMgcmVnaW9uPVwiYmFzaWMtaG93LXRvXCJ9XG4gKlxuICogRm9yIG1vcmUgZGV0YWlscyBvbiBob3cgdG8gdXNlIGBkb3duZ3JhZGVNb2R1bGUoKWAgc2VlXG4gKiBbVXBncmFkaW5nIGZvciBQZXJmb3JtYW5jZV0oZ3VpZGUvdXBncmFkZS1wZXJmb3JtYW5jZSkuXG4gKlxuICogQHVzYWdlTm90ZXNcbiAqXG4gKiBBcGFydCBmcm9tIGBVcGdyYWRlTW9kdWxlYCwgeW91IGNhbiB1c2UgdGhlIHJlc3Qgb2YgdGhlIGB1cGdyYWRlL3N0YXRpY2AgaGVscGVycyBhcyB1c3VhbCB0b1xuICogYnVpbGQgYSBoeWJyaWQgYXBwbGljYXRpb24uIE5vdGUgdGhhdCB0aGUgQW5ndWxhciBwaWVjZXMgKGUuZy4gZG93bmdyYWRlZCBzZXJ2aWNlcykgd2lsbCBub3QgYmVcbiAqIGF2YWlsYWJsZSB1bnRpbCB0aGUgZG93bmdyYWRlZCBtb2R1bGUgaGFzIGJlZW4gYm9vdHN0cmFwcGVkLCBpLmUuIGJ5IGluc3RhbnRpYXRpbmcgYSBkb3duZ3JhZGVkXG4gKiBjb21wb25lbnQuXG4gKlxuICogPGRpdiBjbGFzcz1cImFsZXJ0IGlzLWltcG9ydGFudFwiPlxuICpcbiAqICAgWW91IGNhbm5vdCB1c2UgYGRvd25ncmFkZU1vZHVsZSgpYCBhbmQgYFVwZ3JhZGVNb2R1bGVgIGluIHRoZSBzYW1lIGh5YnJpZCBhcHBsaWNhdGlvbi48YnIgLz5cbiAqICAgVXNlIG9uZSBvciB0aGUgb3RoZXIuXG4gKlxuICogPC9kaXY+XG4gKlxuICogIyMjIERpZmZlcmVuY2VzIHdpdGggYFVwZ3JhZGVNb2R1bGVgXG4gKlxuICogQmVzaWRlcyB0aGVpciBkaWZmZXJlbnQgQVBJLCB0aGVyZSBhcmUgdHdvIGltcG9ydGFudCBpbnRlcm5hbCBkaWZmZXJlbmNlcyBiZXR3ZWVuXG4gKiBgZG93bmdyYWRlTW9kdWxlKClgIGFuZCBgVXBncmFkZU1vZHVsZWAgdGhhdCBhZmZlY3QgdGhlIGJlaGF2aW9yIG9mIGh5YnJpZCBhcHBsaWNhdGlvbnM6XG4gKlxuICogMS4gVW5saWtlIGBVcGdyYWRlTW9kdWxlYCwgYGRvd25ncmFkZU1vZHVsZSgpYCBkb2VzIG5vdCBib290c3RyYXAgdGhlIG1haW4gQW5ndWxhckpTIG1vZHVsZVxuICogICAgaW5zaWRlIHRoZSB7QGxpbmsgTmdab25lIEFuZ3VsYXIgem9uZX0uXG4gKiAyLiBVbmxpa2UgYFVwZ3JhZGVNb2R1bGVgLCBgZG93bmdyYWRlTW9kdWxlKClgIGRvZXMgbm90IGF1dG9tYXRpY2FsbHkgcnVuIGFcbiAqICAgIFskZGlnZXN0KCldKGh0dHBzOi8vZG9jcy5hbmd1bGFyanMub3JnL2FwaS9uZy90eXBlLyRyb290U2NvcGUuU2NvcGUjJGRpZ2VzdCkgd2hlbiBjaGFuZ2VzIGFyZVxuICogICAgZGV0ZWN0ZWQgaW4gdGhlIEFuZ3VsYXIgcGFydCBvZiB0aGUgYXBwbGljYXRpb24uXG4gKlxuICogV2hhdCB0aGlzIG1lYW5zIGlzIHRoYXQgYXBwbGljYXRpb25zIHVzaW5nIGBVcGdyYWRlTW9kdWxlYCB3aWxsIHJ1biBjaGFuZ2UgZGV0ZWN0aW9uIG1vcmVcbiAqIGZyZXF1ZW50bHkgaW4gb3JkZXIgdG8gZW5zdXJlIHRoYXQgYm90aCBmcmFtZXdvcmtzIGFyZSBwcm9wZXJseSBub3RpZmllZCBhYm91dCBwb3NzaWJsZSBjaGFuZ2VzLlxuICogVGhpcyB3aWxsIGluZXZpdGFibHkgcmVzdWx0IGluIG1vcmUgY2hhbmdlIGRldGVjdGlvbiBydW5zIHRoYW4gbmVjZXNzYXJ5LlxuICpcbiAqIGBkb3duZ3JhZGVNb2R1bGUoKWAsIG9uIHRoZSBvdGhlciBzaWRlLCBkb2VzIG5vdCB0cnkgdG8gdGllIHRoZSB0d28gY2hhbmdlIGRldGVjdGlvbiBzeXN0ZW1zIGFzXG4gKiB0aWdodGx5LCByZXN0cmljdGluZyB0aGUgZXhwbGljaXQgY2hhbmdlIGRldGVjdGlvbiBydW5zIG9ubHkgdG8gY2FzZXMgd2hlcmUgaXQga25vd3MgaXQgaXNcbiAqIG5lY2Vzc2FyeSAoZS5nLiB3aGVuIHRoZSBpbnB1dHMgb2YgYSBkb3duZ3JhZGVkIGNvbXBvbmVudCBjaGFuZ2UpLiBUaGlzIGltcHJvdmVzIHBlcmZvcm1hbmNlLFxuICogZXNwZWNpYWxseSBpbiBjaGFuZ2UtZGV0ZWN0aW9uLWhlYXZ5IGFwcGxpY2F0aW9ucywgYnV0IGxlYXZlcyBpdCB1cCB0byB0aGUgZGV2ZWxvcGVyIHRvIG1hbnVhbGx5XG4gKiBub3RpZnkgZWFjaCBmcmFtZXdvcmsgYXMgbmVlZGVkLlxuICpcbiAqIEZvciBhIG1vcmUgZGV0YWlsZWQgZGlzY3Vzc2lvbiBvZiB0aGUgZGlmZmVyZW5jZXMgYW5kIHRoZWlyIGltcGxpY2F0aW9ucywgc2VlXG4gKiBbVXBncmFkaW5nIGZvciBQZXJmb3JtYW5jZV0oZ3VpZGUvdXBncmFkZS1wZXJmb3JtYW5jZSkuXG4gKlxuICogPGRpdiBjbGFzcz1cImFsZXJ0IGlzLWhlbHBmdWxcIj5cbiAqXG4gKiAgIFlvdSBjYW4gbWFudWFsbHkgdHJpZ2dlciBhIGNoYW5nZSBkZXRlY3Rpb24gcnVuIGluIEFuZ3VsYXJKUyB1c2luZ1xuICogICBbc2NvcGUuJGFwcGx5KC4uLildKGh0dHBzOi8vZG9jcy5hbmd1bGFyanMub3JnL2FwaS9uZy90eXBlLyRyb290U2NvcGUuU2NvcGUjJGFwcGx5KSBvclxuICogICBbJHJvb3RTY29wZS4kZGlnZXN0KCldKGh0dHBzOi8vZG9jcy5hbmd1bGFyanMub3JnL2FwaS9uZy90eXBlLyRyb290U2NvcGUuU2NvcGUjJGRpZ2VzdCkuXG4gKlxuICogICBZb3UgY2FuIG1hbnVhbGx5IHRyaWdnZXIgYSBjaGFuZ2UgZGV0ZWN0aW9uIHJ1biBpbiBBbmd1bGFyIHVzaW5nIHtAbGluayBOZ1pvbmUjcnVuXG4gKiAgIG5nWm9uZS5ydW4oLi4uKX0uXG4gKlxuICogPC9kaXY+XG4gKlxuICogQHB1YmxpY0FwaVxuICovXG5leHBvcnQgZnVuY3Rpb24gZG93bmdyYWRlTW9kdWxlPFQ+KFxuICAgIG1vZHVsZUZhY3RvcnlPckJvb3RzdHJhcEZuOiBOZ01vZHVsZUZhY3Rvcnk8VD58XG4gICAgKChleHRyYVByb3ZpZGVyczogU3RhdGljUHJvdmlkZXJbXSkgPT4gUHJvbWlzZTxOZ01vZHVsZVJlZjxUPj4pKTogc3RyaW5nIHtcbiAgY29uc3QgbGF6eU1vZHVsZU5hbWUgPSBgJHtVUEdSQURFX01PRFVMRV9OQU1FfS5sYXp5JHsrK21vZHVsZVVpZH1gO1xuICBjb25zdCBsYXp5TW9kdWxlUmVmS2V5ID0gYCR7TEFaWV9NT0RVTEVfUkVGfSR7bGF6eU1vZHVsZU5hbWV9YDtcbiAgY29uc3QgbGF6eUluamVjdG9yS2V5ID0gYCR7SU5KRUNUT1JfS0VZfSR7bGF6eU1vZHVsZU5hbWV9YDtcblxuICBjb25zdCBib290c3RyYXBGbiA9IGlzRnVuY3Rpb24obW9kdWxlRmFjdG9yeU9yQm9vdHN0cmFwRm4pID9cbiAgICAgIG1vZHVsZUZhY3RvcnlPckJvb3RzdHJhcEZuIDpcbiAgICAgIChleHRyYVByb3ZpZGVyczogU3RhdGljUHJvdmlkZXJbXSkgPT5cbiAgICAgICAgICBwbGF0Zm9ybUJyb3dzZXIoZXh0cmFQcm92aWRlcnMpLmJvb3RzdHJhcE1vZHVsZUZhY3RvcnkobW9kdWxlRmFjdG9yeU9yQm9vdHN0cmFwRm4pO1xuXG4gIGxldCBpbmplY3RvcjogSW5qZWN0b3I7XG5cbiAgLy8gQ3JlYXRlIGFuIG5nMSBtb2R1bGUgdG8gYm9vdHN0cmFwLlxuICBhbmd1bGFyLm1vZHVsZShsYXp5TW9kdWxlTmFtZSwgW10pXG4gICAgICAuY29uc3RhbnQoVVBHUkFERV9BUFBfVFlQRV9LRVksIFVwZ3JhZGVBcHBUeXBlLkxpdGUpXG4gICAgICAuZmFjdG9yeShJTkpFQ1RPUl9LRVksIFtsYXp5SW5qZWN0b3JLZXksIGlkZW50aXR5XSlcbiAgICAgIC5mYWN0b3J5KFxuICAgICAgICAgIGxhenlJbmplY3RvcktleSxcbiAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoIWluamVjdG9yKSB7XG4gICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgICAgICAgICdUcnlpbmcgdG8gZ2V0IHRoZSBBbmd1bGFyIGluamVjdG9yIGJlZm9yZSBib290c3RyYXBwaW5nIHRoZSBjb3JyZXNwb25kaW5nICcgK1xuICAgICAgICAgICAgICAgICAgJ0FuZ3VsYXIgbW9kdWxlLicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGluamVjdG9yO1xuICAgICAgICAgIH0pXG4gICAgICAuZmFjdG9yeShMQVpZX01PRFVMRV9SRUYsIFtsYXp5TW9kdWxlUmVmS2V5LCBpZGVudGl0eV0pXG4gICAgICAuZmFjdG9yeShcbiAgICAgICAgICBsYXp5TW9kdWxlUmVmS2V5LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgICRJTkpFQ1RPUixcbiAgICAgICAgICAgICgkaW5qZWN0b3I6IGFuZ3VsYXIuSUluamVjdG9yU2VydmljZSkgPT4ge1xuICAgICAgICAgICAgICBzZXRUZW1wSW5qZWN0b3JSZWYoJGluamVjdG9yKTtcbiAgICAgICAgICAgICAgY29uc3QgcmVzdWx0OiBMYXp5TW9kdWxlUmVmID0ge1xuICAgICAgICAgICAgICAgIG5lZWRzTmdab25lOiB0cnVlLFxuICAgICAgICAgICAgICAgIHByb21pc2U6IGJvb3RzdHJhcEZuKGFuZ3VsYXIxUHJvdmlkZXJzKS50aGVuKHJlZiA9PiB7XG4gICAgICAgICAgICAgICAgICBpbmplY3RvciA9IHJlc3VsdC5pbmplY3RvciA9IG5ldyBOZ0FkYXB0ZXJJbmplY3RvcihyZWYuaW5qZWN0b3IpO1xuICAgICAgICAgICAgICAgICAgaW5qZWN0b3IuZ2V0KCRJTkpFQ1RPUik7XG5cbiAgICAgICAgICAgICAgICAgIHJldHVybiBpbmplY3RvcjtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIF0pXG4gICAgICAuY29uZmlnKFtcbiAgICAgICAgJElOSkVDVE9SLCAkUFJPVklERSxcbiAgICAgICAgKCRpbmplY3RvcjogYW5ndWxhci5JSW5qZWN0b3JTZXJ2aWNlLCAkcHJvdmlkZTogYW5ndWxhci5JUHJvdmlkZVNlcnZpY2UpID0+IHtcbiAgICAgICAgICAkcHJvdmlkZS5jb25zdGFudChET1dOR1JBREVEX01PRFVMRV9DT1VOVF9LRVksIGdldERvd25ncmFkZWRNb2R1bGVDb3VudCgkaW5qZWN0b3IpICsgMSk7XG4gICAgICAgIH1cbiAgICAgIF0pO1xuXG4gIHJldHVybiBsYXp5TW9kdWxlTmFtZTtcbn1cblxuZnVuY3Rpb24gaWRlbnRpdHk8VCA9IGFueT4oeDogVCk6IFQge1xuICByZXR1cm4geDtcbn1cbiJdfQ==