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
/** @typedef {?} */
var Ng1Token;
export { Ng1Token };
/** @typedef {?} */
var Ng1Expression;
export { Ng1Expression };
/**
 * @record
 */
export function IAnnotatedFunction() { }
/** @type {?|undefined} */
IAnnotatedFunction.prototype.$inject;
/** @typedef {?} */
var IInjectable;
export { IInjectable };
/** @typedef {?} */
var SingleOrListOrMap;
export { SingleOrListOrMap };
/**
 * @record
 */
export function IModule() { }
/** @type {?} */
IModule.prototype.name;
/** @type {?} */
IModule.prototype.requires;
/** @type {?} */
IModule.prototype.config;
/** @type {?} */
IModule.prototype.directive;
/** @type {?} */
IModule.prototype.component;
/** @type {?} */
IModule.prototype.controller;
/** @type {?} */
IModule.prototype.factory;
/** @type {?} */
IModule.prototype.value;
/** @type {?} */
IModule.prototype.constant;
/** @type {?} */
IModule.prototype.run;
/**
 * @record
 */
export function ICompileService() { }
/**
 * @record
 */
export function ILinkFn() { }
/* TODO: handle strange member:
(scope: IScope, cloneAttachFn?: ICloneAttachFunction, options?: ILinkFnOptions): IAugmentedJQuery;
*/
/** @type {?|undefined} */
ILinkFn.prototype.$$slots;
/**
 * @record
 */
export function ILinkFnOptions() { }
/** @type {?|undefined} */
ILinkFnOptions.prototype.parentBoundTranscludeFn;
/** @type {?|undefined} */
ILinkFnOptions.prototype.transcludeControllers;
/** @type {?|undefined} */
ILinkFnOptions.prototype.futureParentElement;
/**
 * @record
 */
export function IRootScopeService() { }
/** @type {?} */
IRootScopeService.prototype.$new;
/** @type {?} */
IRootScopeService.prototype.$id;
/** @type {?} */
IRootScopeService.prototype.$parent;
/** @type {?} */
IRootScopeService.prototype.$root;
/** @type {?} */
IRootScopeService.prototype.$watch;
/** @type {?} */
IRootScopeService.prototype.$on;
/** @type {?} */
IRootScopeService.prototype.$destroy;
/** @type {?} */
IRootScopeService.prototype.$apply;
/** @type {?} */
IRootScopeService.prototype.$digest;
/** @type {?} */
IRootScopeService.prototype.$evalAsync;
/** @type {?} */
IRootScopeService.prototype.$on;
/** @type {?} */
IRootScopeService.prototype.$$childTail;
/** @type {?} */
IRootScopeService.prototype.$$childHead;
/** @type {?} */
IRootScopeService.prototype.$$nextSibling;
/**
 * @record
 */
export function IScope() { }
/**
 * @record
 */
export function IAngularBootstrapConfig() { }
/** @type {?|undefined} */
IAngularBootstrapConfig.prototype.strictDi;
/**
 * @record
 */
export function IDirective() { }
/** @type {?|undefined} */
IDirective.prototype.compile;
/** @type {?|undefined} */
IDirective.prototype.controller;
/** @type {?|undefined} */
IDirective.prototype.controllerAs;
/** @type {?|undefined} */
IDirective.prototype.bindToController;
/** @type {?|undefined} */
IDirective.prototype.link;
/** @type {?|undefined} */
IDirective.prototype.name;
/** @type {?|undefined} */
IDirective.prototype.priority;
/** @type {?|undefined} */
IDirective.prototype.replace;
/** @type {?|undefined} */
IDirective.prototype.require;
/** @type {?|undefined} */
IDirective.prototype.restrict;
/** @type {?|undefined} */
IDirective.prototype.scope;
/** @type {?|undefined} */
IDirective.prototype.template;
/** @type {?|undefined} */
IDirective.prototype.templateUrl;
/** @type {?|undefined} */
IDirective.prototype.templateNamespace;
/** @type {?|undefined} */
IDirective.prototype.terminal;
/** @type {?|undefined} */
IDirective.prototype.transclude;
/** @typedef {?} */
var DirectiveRequireProperty;
export { DirectiveRequireProperty };
/** @typedef {?} */
var DirectiveTranscludeProperty;
export { DirectiveTranscludeProperty };
/**
 * @record
 */
export function IDirectiveCompileFn() { }
/**
 * @record
 */
export function IDirectivePrePost() { }
/** @type {?|undefined} */
IDirectivePrePost.prototype.pre;
/** @type {?|undefined} */
IDirectivePrePost.prototype.post;
/**
 * @record
 */
export function IDirectiveLinkFn() { }
/**
 * @record
 */
export function IComponent() { }
/** @type {?|undefined} */
IComponent.prototype.bindings;
/** @type {?|undefined} */
IComponent.prototype.controller;
/** @type {?|undefined} */
IComponent.prototype.controllerAs;
/** @type {?|undefined} */
IComponent.prototype.require;
/** @type {?|undefined} */
IComponent.prototype.template;
/** @type {?|undefined} */
IComponent.prototype.templateUrl;
/** @type {?|undefined} */
IComponent.prototype.transclude;
/**
 * @record
 */
export function IAttributes() { }
/** @type {?} */
IAttributes.prototype.$observe;
/**
 * @record
 */
export function ITranscludeFunction() { }
/**
 * @record
 */
export function ICloneAttachFunction() { }
/** @typedef {?} */
var IAugmentedJQuery;
export { IAugmentedJQuery };
/**
 * @record
 */
export function IProvider() { }
/** @type {?} */
IProvider.prototype.$get;
/**
 * @record
 */
export function IProvideService() { }
/** @type {?} */
IProvideService.prototype.provider;
/** @type {?} */
IProvideService.prototype.factory;
/** @type {?} */
IProvideService.prototype.service;
/** @type {?} */
IProvideService.prototype.value;
/** @type {?} */
IProvideService.prototype.constant;
/** @type {?} */
IProvideService.prototype.decorator;
/**
 * @record
 */
export function IParseService() { }
/**
 * @record
 */
export function ICompiledExpression() { }
/* TODO: handle strange member:
(context: any, locals: any): any;
*/
/** @type {?|undefined} */
ICompiledExpression.prototype.assign;
/**
 * @record
 */
export function IHttpBackendService() { }
/**
 * @record
 */
export function ICacheObject() { }
/** @type {?} */
ICacheObject.prototype.put;
/** @type {?} */
ICacheObject.prototype.get;
/**
 * @record
 */
export function ITemplateCacheService() { }
/**
 * @record
 */
export function ITemplateRequestService() { }
/* TODO: handle strange member:
(template: string|any __ TrustedResourceUrl __, ignoreRequestError?: boolean): Promise<string>;
*/
/** @type {?} */
ITemplateRequestService.prototype.totalPendingRequests;
/** @typedef {?} */
var IController;
export { IController };
/**
 * @record
 */
export function IControllerService() { }
/**
 * @record
 */
export function IInjectorService() { }
/** @type {?} */
IInjectorService.prototype.get;
/** @type {?} */
IInjectorService.prototype.has;
/**
 * @record
 */
export function IIntervalService() { }
/* TODO: handle strange member:
(func: Function, delay: number, count?: number, invokeApply?: boolean,
   ...args: any[]): Promise<any>;
*/
/** @type {?} */
IIntervalService.prototype.cancel;
/**
 * @record
 */
export function ITestabilityService() { }
/** @type {?} */
ITestabilityService.prototype.findBindings;
/** @type {?} */
ITestabilityService.prototype.findModels;
/** @type {?} */
ITestabilityService.prototype.getLocation;
/** @type {?} */
ITestabilityService.prototype.setLocation;
/** @type {?} */
ITestabilityService.prototype.whenStable;
/**
 * @record
 */
export function INgModelController() { }
/** @type {?} */
INgModelController.prototype.$render;
/** @type {?} */
INgModelController.prototype.$isEmpty;
/** @type {?} */
INgModelController.prototype.$setValidity;
/** @type {?} */
INgModelController.prototype.$setPristine;
/** @type {?} */
INgModelController.prototype.$setDirty;
/** @type {?} */
INgModelController.prototype.$setUntouched;
/** @type {?} */
INgModelController.prototype.$setTouched;
/** @type {?} */
INgModelController.prototype.$rollbackViewValue;
/** @type {?} */
INgModelController.prototype.$validate;
/** @type {?} */
INgModelController.prototype.$commitViewValue;
/** @type {?} */
INgModelController.prototype.$setViewValue;
/** @type {?} */
INgModelController.prototype.$viewValue;
/** @type {?} */
INgModelController.prototype.$modelValue;
/** @type {?} */
INgModelController.prototype.$parsers;
/** @type {?} */
INgModelController.prototype.$formatters;
/** @type {?} */
INgModelController.prototype.$validators;
/** @type {?} */
INgModelController.prototype.$asyncValidators;
/** @type {?} */
INgModelController.prototype.$viewChangeListeners;
/** @type {?} */
INgModelController.prototype.$error;
/** @type {?} */
INgModelController.prototype.$pending;
/** @type {?} */
INgModelController.prototype.$untouched;
/** @type {?} */
INgModelController.prototype.$touched;
/** @type {?} */
INgModelController.prototype.$pristine;
/** @type {?} */
INgModelController.prototype.$dirty;
/** @type {?} */
INgModelController.prototype.$valid;
/** @type {?} */
INgModelController.prototype.$invalid;
/** @type {?} */
INgModelController.prototype.$name;
/**
 * @return {?}
 */
function noNg() {
    throw new Error('AngularJS v1.x is not loaded!');
}
/** @type {?} */
const noNgElement = /** @type {?} */ ((() => noNg()));
noNgElement.cleanData = noNg;
/** @type {?} */
let angular = {
    bootstrap: noNg,
    module: noNg,
    element: noNgElement,
    version: /** @type {?} */ (undefined),
    resumeBootstrap: noNg,
    getTestability: noNg
};
try {
    if (window.hasOwnProperty('angular')) {
        angular = (/** @type {?} */ (window)).angular;
    }
}
catch (e) {
    // ignore in CJS mode.
}
/**
 * @deprecated Use `setAngularJSGlobal` instead.
 * @param {?} ng
 * @return {?}
 */
export function setAngularLib(ng) {
    setAngularJSGlobal(ng);
}
/**
 * @deprecated Use `getAngularJSGlobal` instead.
 * @return {?}
 */
export function getAngularLib() {
    return getAngularJSGlobal();
}
/**
 * Resets the AngularJS global.
 *
 * Used when AngularJS is loaded lazily, and not available on `window`.
 * @param {?} ng
 * @return {?}
 */
export function setAngularJSGlobal(ng) {
    angular = ng;
    version = ng && ng.version;
}
/**
 * Returns the current AngularJS global.
 * @return {?}
 */
export function getAngularJSGlobal() {
    return angular;
}
/** @type {?} */
export const bootstrap = (e, modules, config) => angular.bootstrap(e, modules, config);
/** @type {?} */
export const module = (prefix, dependencies) => angular.module(prefix, dependencies);
/** @type {?} */
export const element = /** @type {?} */ ((e => angular.element(e)));
element.cleanData = nodes => angular.element.cleanData(nodes);
/** @type {?} */
export const resumeBootstrap = () => angular.resumeBootstrap();
/** @type {?} */
export const getTestability = e => angular.getTestability(e);
/** @type {?} */
export let version = angular.version;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhcjEuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy91cGdyYWRlL3NyYy9jb21tb24vYW5ndWxhcjEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF3TkE7SUFDRSxNQUFNLElBQUksS0FBSyxDQUFDLCtCQUErQixDQUFDLENBQUM7Q0FDbEQ7O0FBRUQsTUFBTSxXQUFXLHFCQUEyQixDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksRUFBRSxDQUFRLEVBQUM7QUFDbEUsV0FBVyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7O0FBRTdCLElBQUksT0FBTyxHQVdQO0lBQ0YsU0FBUyxFQUFFLElBQUk7SUFDZixNQUFNLEVBQUUsSUFBSTtJQUNaLE9BQU8sRUFBRSxXQUFXO0lBQ3BCLE9BQU8sb0JBQUUsU0FBZ0IsQ0FBQTtJQUN6QixlQUFlLEVBQUUsSUFBSTtJQUNyQixjQUFjLEVBQUUsSUFBSTtDQUNyQixDQUFDO0FBRUYsSUFBSTtJQUNGLElBQUksTUFBTSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsRUFBRTtRQUNwQyxPQUFPLEdBQUcsbUJBQU0sTUFBTSxFQUFDLENBQUMsT0FBTyxDQUFDO0tBQ2pDO0NBQ0Y7QUFBQyxPQUFPLENBQUMsRUFBRTs7Q0FFWDs7Ozs7O0FBS0QsTUFBTSx3QkFBd0IsRUFBTztJQUNuQyxrQkFBa0IsQ0FBQyxFQUFFLENBQUMsQ0FBQztDQUN4Qjs7Ozs7QUFLRCxNQUFNO0lBQ0osT0FBTyxrQkFBa0IsRUFBRSxDQUFDO0NBQzdCOzs7Ozs7OztBQU9ELE1BQU0sNkJBQTZCLEVBQU87SUFDeEMsT0FBTyxHQUFHLEVBQUUsQ0FBQztJQUNiLE9BQU8sR0FBRyxFQUFFLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQztDQUM1Qjs7Ozs7QUFLRCxNQUFNO0lBQ0osT0FBTyxPQUFPLENBQUM7Q0FDaEI7O0FBRUQsYUFBYSxTQUFTLEdBQTZCLENBQUMsQ0FBQyxFQUFFLE9BQU8sRUFBRSxNQUFPLEVBQUUsRUFBRSxDQUN2RSxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUM7O0FBRTFDLGFBQWEsTUFBTSxHQUEwQixDQUFDLE1BQU0sRUFBRSxZQUFhLEVBQUUsRUFBRSxDQUNuRSxPQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxZQUFZLENBQUMsQ0FBQzs7QUFFekMsYUFBYSxPQUFPLHFCQUEyQixDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBMkIsRUFBQztBQUNuRyxPQUFPLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7O0FBRTlELGFBQWEsZUFBZSxHQUFtQyxHQUFHLEVBQUUsQ0FBQyxPQUFPLENBQUMsZUFBZSxFQUFFLENBQUM7O0FBRS9GLGFBQWEsY0FBYyxHQUFrQyxDQUFDLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUM7O0FBRTVGLFdBQVcsT0FBTyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmV4cG9ydCB0eXBlIE5nMVRva2VuID0gc3RyaW5nO1xuXG5leHBvcnQgdHlwZSBOZzFFeHByZXNzaW9uID0gc3RyaW5nIHwgRnVuY3Rpb247XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUFubm90YXRlZEZ1bmN0aW9uIGV4dGVuZHMgRnVuY3Rpb24geyAkaW5qZWN0PzogUmVhZG9ubHlBcnJheTxOZzFUb2tlbj47IH1cblxuZXhwb3J0IHR5cGUgSUluamVjdGFibGUgPSAoTmcxVG9rZW4gfCBGdW5jdGlvbilbXSB8IElBbm5vdGF0ZWRGdW5jdGlvbjtcblxuZXhwb3J0IHR5cGUgU2luZ2xlT3JMaXN0T3JNYXA8VD4gPSBUIHwgVFtdIHwge1trZXk6IHN0cmluZ106IFR9O1xuXG5leHBvcnQgaW50ZXJmYWNlIElNb2R1bGUge1xuICBuYW1lOiBzdHJpbmc7XG4gIHJlcXVpcmVzOiAoc3RyaW5nfElJbmplY3RhYmxlKVtdO1xuICBjb25maWcoZm46IElJbmplY3RhYmxlKTogSU1vZHVsZTtcbiAgZGlyZWN0aXZlKHNlbGVjdG9yOiBzdHJpbmcsIGZhY3Rvcnk6IElJbmplY3RhYmxlKTogSU1vZHVsZTtcbiAgY29tcG9uZW50KHNlbGVjdG9yOiBzdHJpbmcsIGNvbXBvbmVudDogSUNvbXBvbmVudCk6IElNb2R1bGU7XG4gIGNvbnRyb2xsZXIobmFtZTogc3RyaW5nLCB0eXBlOiBJSW5qZWN0YWJsZSk6IElNb2R1bGU7XG4gIGZhY3Rvcnkoa2V5OiBOZzFUb2tlbiwgZmFjdG9yeUZuOiBJSW5qZWN0YWJsZSk6IElNb2R1bGU7XG4gIHZhbHVlKGtleTogTmcxVG9rZW4sIHZhbHVlOiBhbnkpOiBJTW9kdWxlO1xuICBjb25zdGFudCh0b2tlbjogTmcxVG9rZW4sIHZhbHVlOiBhbnkpOiBJTW9kdWxlO1xuICBydW4oYTogSUluamVjdGFibGUpOiBJTW9kdWxlO1xufVxuZXhwb3J0IGludGVyZmFjZSBJQ29tcGlsZVNlcnZpY2Uge1xuICAoZWxlbWVudDogRWxlbWVudHxOb2RlTGlzdHxOb2RlW118c3RyaW5nLCB0cmFuc2NsdWRlPzogRnVuY3Rpb24pOiBJTGlua0ZuO1xufVxuZXhwb3J0IGludGVyZmFjZSBJTGlua0ZuIHtcbiAgKHNjb3BlOiBJU2NvcGUsIGNsb25lQXR0YWNoRm4/OiBJQ2xvbmVBdHRhY2hGdW5jdGlvbiwgb3B0aW9ucz86IElMaW5rRm5PcHRpb25zKTogSUF1Z21lbnRlZEpRdWVyeTtcbiAgJCRzbG90cz86IHtbc2xvdE5hbWU6IHN0cmluZ106IElMaW5rRm59O1xufVxuZXhwb3J0IGludGVyZmFjZSBJTGlua0ZuT3B0aW9ucyB7XG4gIHBhcmVudEJvdW5kVHJhbnNjbHVkZUZuPzogRnVuY3Rpb247XG4gIHRyYW5zY2x1ZGVDb250cm9sbGVycz86IHtba2V5OiBzdHJpbmddOiBhbnl9O1xuICBmdXR1cmVQYXJlbnRFbGVtZW50PzogTm9kZTtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgSVJvb3RTY29wZVNlcnZpY2Uge1xuICAkbmV3KGlzb2xhdGU/OiBib29sZWFuKTogSVNjb3BlO1xuICAkaWQ6IHN0cmluZztcbiAgJHBhcmVudDogSVNjb3BlO1xuICAkcm9vdDogSVNjb3BlO1xuICAkd2F0Y2goZXhwOiBOZzFFeHByZXNzaW9uLCBmbj86IChhMT86IGFueSwgYTI/OiBhbnkpID0+IHZvaWQpOiBGdW5jdGlvbjtcbiAgJG9uKGV2ZW50OiBzdHJpbmcsIGZuPzogKGV2ZW50PzogYW55LCAuLi5hcmdzOiBhbnlbXSkgPT4gdm9pZCk6IEZ1bmN0aW9uO1xuICAkZGVzdHJveSgpOiBhbnk7XG4gICRhcHBseShleHA/OiBOZzFFeHByZXNzaW9uKTogYW55O1xuICAkZGlnZXN0KCk6IGFueTtcbiAgJGV2YWxBc3luYyhleHA6IE5nMUV4cHJlc3Npb24sIGxvY2Fscz86IGFueSk6IHZvaWQ7XG4gICRvbihldmVudDogc3RyaW5nLCBmbj86IChldmVudD86IGFueSwgLi4uYXJnczogYW55W10pID0+IHZvaWQpOiBGdW5jdGlvbjtcbiAgJCRjaGlsZFRhaWw6IElTY29wZTtcbiAgJCRjaGlsZEhlYWQ6IElTY29wZTtcbiAgJCRuZXh0U2libGluZzogSVNjb3BlO1xuICBba2V5OiBzdHJpbmddOiBhbnk7XG59XG5leHBvcnQgaW50ZXJmYWNlIElTY29wZSBleHRlbmRzIElSb290U2NvcGVTZXJ2aWNlIHt9XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUFuZ3VsYXJCb290c3RyYXBDb25maWcgeyBzdHJpY3REaT86IGJvb2xlYW47IH1cbmV4cG9ydCBpbnRlcmZhY2UgSURpcmVjdGl2ZSB7XG4gIGNvbXBpbGU/OiBJRGlyZWN0aXZlQ29tcGlsZUZuO1xuICBjb250cm9sbGVyPzogSUNvbnRyb2xsZXI7XG4gIGNvbnRyb2xsZXJBcz86IHN0cmluZztcbiAgYmluZFRvQ29udHJvbGxlcj86IGJvb2xlYW58e1trZXk6IHN0cmluZ106IHN0cmluZ307XG4gIGxpbms/OiBJRGlyZWN0aXZlTGlua0ZufElEaXJlY3RpdmVQcmVQb3N0O1xuICBuYW1lPzogc3RyaW5nO1xuICBwcmlvcml0eT86IG51bWJlcjtcbiAgcmVwbGFjZT86IGJvb2xlYW47XG4gIHJlcXVpcmU/OiBEaXJlY3RpdmVSZXF1aXJlUHJvcGVydHk7XG4gIHJlc3RyaWN0Pzogc3RyaW5nO1xuICBzY29wZT86IGJvb2xlYW58e1trZXk6IHN0cmluZ106IHN0cmluZ307XG4gIHRlbXBsYXRlPzogc3RyaW5nfEZ1bmN0aW9uO1xuICB0ZW1wbGF0ZVVybD86IHN0cmluZ3xGdW5jdGlvbjtcbiAgdGVtcGxhdGVOYW1lc3BhY2U/OiBzdHJpbmc7XG4gIHRlcm1pbmFsPzogYm9vbGVhbjtcbiAgdHJhbnNjbHVkZT86IERpcmVjdGl2ZVRyYW5zY2x1ZGVQcm9wZXJ0eTtcbn1cbmV4cG9ydCB0eXBlIERpcmVjdGl2ZVJlcXVpcmVQcm9wZXJ0eSA9IFNpbmdsZU9yTGlzdE9yTWFwPHN0cmluZz47XG5leHBvcnQgdHlwZSBEaXJlY3RpdmVUcmFuc2NsdWRlUHJvcGVydHkgPSBib29sZWFuIHwgJ2VsZW1lbnQnIHwge1trZXk6IHN0cmluZ106IHN0cmluZ307XG5leHBvcnQgaW50ZXJmYWNlIElEaXJlY3RpdmVDb21waWxlRm4ge1xuICAodGVtcGxhdGVFbGVtZW50OiBJQXVnbWVudGVkSlF1ZXJ5LCB0ZW1wbGF0ZUF0dHJpYnV0ZXM6IElBdHRyaWJ1dGVzLFxuICAgdHJhbnNjbHVkZTogSVRyYW5zY2x1ZGVGdW5jdGlvbik6IElEaXJlY3RpdmVQcmVQb3N0O1xufVxuZXhwb3J0IGludGVyZmFjZSBJRGlyZWN0aXZlUHJlUG9zdCB7XG4gIHByZT86IElEaXJlY3RpdmVMaW5rRm47XG4gIHBvc3Q/OiBJRGlyZWN0aXZlTGlua0ZuO1xufVxuZXhwb3J0IGludGVyZmFjZSBJRGlyZWN0aXZlTGlua0ZuIHtcbiAgKHNjb3BlOiBJU2NvcGUsIGluc3RhbmNlRWxlbWVudDogSUF1Z21lbnRlZEpRdWVyeSwgaW5zdGFuY2VBdHRyaWJ1dGVzOiBJQXR0cmlidXRlcyxcbiAgIGNvbnRyb2xsZXI6IGFueSwgdHJhbnNjbHVkZTogSVRyYW5zY2x1ZGVGdW5jdGlvbik6IHZvaWQ7XG59XG5leHBvcnQgaW50ZXJmYWNlIElDb21wb25lbnQge1xuICBiaW5kaW5ncz86IHtba2V5OiBzdHJpbmddOiBzdHJpbmd9O1xuICBjb250cm9sbGVyPzogc3RyaW5nfElJbmplY3RhYmxlO1xuICBjb250cm9sbGVyQXM/OiBzdHJpbmc7XG4gIHJlcXVpcmU/OiBEaXJlY3RpdmVSZXF1aXJlUHJvcGVydHk7XG4gIHRlbXBsYXRlPzogc3RyaW5nfEZ1bmN0aW9uO1xuICB0ZW1wbGF0ZVVybD86IHN0cmluZ3xGdW5jdGlvbjtcbiAgdHJhbnNjbHVkZT86IERpcmVjdGl2ZVRyYW5zY2x1ZGVQcm9wZXJ0eTtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgSUF0dHJpYnV0ZXMge1xuICAkb2JzZXJ2ZShhdHRyOiBzdHJpbmcsIGZuOiAodjogc3RyaW5nKSA9PiB2b2lkKTogdm9pZDtcbiAgW2tleTogc3RyaW5nXTogYW55O1xufVxuZXhwb3J0IGludGVyZmFjZSBJVHJhbnNjbHVkZUZ1bmN0aW9uIHtcbiAgLy8gSWYgdGhlIHNjb3BlIGlzIHByb3ZpZGVkLCB0aGVuIHRoZSBjbG9uZUF0dGFjaEZuIG11c3QgYmUgYXMgd2VsbC5cbiAgKHNjb3BlOiBJU2NvcGUsIGNsb25lQXR0YWNoRm46IElDbG9uZUF0dGFjaEZ1bmN0aW9uKTogSUF1Z21lbnRlZEpRdWVyeTtcbiAgLy8gSWYgb25lIGFyZ3VtZW50IGlzIHByb3ZpZGVkLCB0aGVuIGl0J3MgYXNzdW1lZCB0byBiZSB0aGUgY2xvbmVBdHRhY2hGbi5cbiAgKGNsb25lQXR0YWNoRm4/OiBJQ2xvbmVBdHRhY2hGdW5jdGlvbik6IElBdWdtZW50ZWRKUXVlcnk7XG59XG5leHBvcnQgaW50ZXJmYWNlIElDbG9uZUF0dGFjaEZ1bmN0aW9uIHtcbiAgLy8gTGV0J3MgaGludCBidXQgbm90IGZvcmNlIGNsb25lQXR0YWNoRm4ncyBzaWduYXR1cmVcbiAgKGNsb25lZEVsZW1lbnQ/OiBJQXVnbWVudGVkSlF1ZXJ5LCBzY29wZT86IElTY29wZSk6IGFueTtcbn1cbmV4cG9ydCB0eXBlIElBdWdtZW50ZWRKUXVlcnkgPSBOb2RlW10gJiB7XG4gIG9uPzogKG5hbWU6IHN0cmluZywgZm46ICgpID0+IHZvaWQpID0+IHZvaWQ7XG4gIGRhdGE/OiAobmFtZTogc3RyaW5nLCB2YWx1ZT86IGFueSkgPT4gYW55O1xuICB0ZXh0PzogKCkgPT4gc3RyaW5nO1xuICBpbmhlcml0ZWREYXRhPzogKG5hbWU6IHN0cmluZywgdmFsdWU/OiBhbnkpID0+IGFueTtcbiAgY29udGVudHM/OiAoKSA9PiBJQXVnbWVudGVkSlF1ZXJ5O1xuICBwYXJlbnQ/OiAoKSA9PiBJQXVnbWVudGVkSlF1ZXJ5O1xuICBlbXB0eT86ICgpID0+IHZvaWQ7XG4gIGFwcGVuZD86IChjb250ZW50OiBJQXVnbWVudGVkSlF1ZXJ5IHwgc3RyaW5nKSA9PiBJQXVnbWVudGVkSlF1ZXJ5O1xuICBjb250cm9sbGVyPzogKG5hbWU6IHN0cmluZykgPT4gYW55O1xuICBpc29sYXRlU2NvcGU/OiAoKSA9PiBJU2NvcGU7XG4gIGluamVjdG9yPzogKCkgPT4gSUluamVjdG9yU2VydmljZTtcbiAgdHJpZ2dlckhhbmRsZXI/OiAoZXZlbnRUeXBlT3JPYmplY3Q6IHN0cmluZyB8IEV2ZW50LCBleHRyYVBhcmFtZXRlcnM/OiBhbnlbXSkgPT4gSUF1Z21lbnRlZEpRdWVyeTtcbiAgcmVtb3ZlPzogKCkgPT4gdm9pZDtcbiAgcmVtb3ZlRGF0YT86ICgpID0+IHZvaWQ7XG59O1xuZXhwb3J0IGludGVyZmFjZSBJUHJvdmlkZXIgeyAkZ2V0OiBJSW5qZWN0YWJsZTsgfVxuZXhwb3J0IGludGVyZmFjZSBJUHJvdmlkZVNlcnZpY2Uge1xuICBwcm92aWRlcih0b2tlbjogTmcxVG9rZW4sIHByb3ZpZGVyOiBJUHJvdmlkZXIpOiBJUHJvdmlkZXI7XG4gIGZhY3RvcnkodG9rZW46IE5nMVRva2VuLCBmYWN0b3J5OiBJSW5qZWN0YWJsZSk6IElQcm92aWRlcjtcbiAgc2VydmljZSh0b2tlbjogTmcxVG9rZW4sIHR5cGU6IElJbmplY3RhYmxlKTogSVByb3ZpZGVyO1xuICB2YWx1ZSh0b2tlbjogTmcxVG9rZW4sIHZhbHVlOiBhbnkpOiBJUHJvdmlkZXI7XG4gIGNvbnN0YW50KHRva2VuOiBOZzFUb2tlbiwgdmFsdWU6IGFueSk6IHZvaWQ7XG4gIGRlY29yYXRvcih0b2tlbjogTmcxVG9rZW4sIGZhY3Rvcnk6IElJbmplY3RhYmxlKTogdm9pZDtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgSVBhcnNlU2VydmljZSB7IChleHByZXNzaW9uOiBzdHJpbmcpOiBJQ29tcGlsZWRFeHByZXNzaW9uOyB9XG5leHBvcnQgaW50ZXJmYWNlIElDb21waWxlZEV4cHJlc3Npb24ge1xuICAoY29udGV4dDogYW55LCBsb2NhbHM6IGFueSk6IGFueTtcbiAgYXNzaWduPzogKGNvbnRleHQ6IGFueSwgdmFsdWU6IGFueSkgPT4gYW55O1xufVxuZXhwb3J0IGludGVyZmFjZSBJSHR0cEJhY2tlbmRTZXJ2aWNlIHtcbiAgKG1ldGhvZDogc3RyaW5nLCB1cmw6IHN0cmluZywgcG9zdD86IGFueSwgY2FsbGJhY2s/OiBGdW5jdGlvbiwgaGVhZGVycz86IGFueSwgdGltZW91dD86IG51bWJlcixcbiAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW4pOiB2b2lkO1xufVxuZXhwb3J0IGludGVyZmFjZSBJQ2FjaGVPYmplY3Qge1xuICBwdXQ8VD4oa2V5OiBzdHJpbmcsIHZhbHVlPzogVCk6IFQ7XG4gIGdldChrZXk6IHN0cmluZyk6IGFueTtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgSVRlbXBsYXRlQ2FjaGVTZXJ2aWNlIGV4dGVuZHMgSUNhY2hlT2JqZWN0IHt9XG5leHBvcnQgaW50ZXJmYWNlIElUZW1wbGF0ZVJlcXVlc3RTZXJ2aWNlIHtcbiAgKHRlbXBsYXRlOiBzdHJpbmd8YW55IC8qIFRydXN0ZWRSZXNvdXJjZVVybCAqLywgaWdub3JlUmVxdWVzdEVycm9yPzogYm9vbGVhbik6IFByb21pc2U8c3RyaW5nPjtcbiAgdG90YWxQZW5kaW5nUmVxdWVzdHM6IG51bWJlcjtcbn1cbmV4cG9ydCB0eXBlIElDb250cm9sbGVyID0gc3RyaW5nIHwgSUluamVjdGFibGU7XG5leHBvcnQgaW50ZXJmYWNlIElDb250cm9sbGVyU2VydmljZSB7XG4gIChjb250cm9sbGVyQ29uc3RydWN0b3I6IElDb250cm9sbGVyLCBsb2NhbHM/OiBhbnksIGxhdGVyPzogYW55LCBpZGVudD86IGFueSk6IGFueTtcbiAgKGNvbnRyb2xsZXJOYW1lOiBzdHJpbmcsIGxvY2Fscz86IGFueSk6IGFueTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJSW5qZWN0b3JTZXJ2aWNlIHtcbiAgZ2V0KGtleTogc3RyaW5nKTogYW55O1xuICBoYXMoa2V5OiBzdHJpbmcpOiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElJbnRlcnZhbFNlcnZpY2Uge1xuICAoZnVuYzogRnVuY3Rpb24sIGRlbGF5OiBudW1iZXIsIGNvdW50PzogbnVtYmVyLCBpbnZva2VBcHBseT86IGJvb2xlYW4sXG4gICAuLi5hcmdzOiBhbnlbXSk6IFByb21pc2U8YW55PjtcbiAgY2FuY2VsKHByb21pc2U6IFByb21pc2U8YW55Pik6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRlc3RhYmlsaXR5U2VydmljZSB7XG4gIGZpbmRCaW5kaW5ncyhlbGVtZW50OiBFbGVtZW50LCBleHByZXNzaW9uOiBzdHJpbmcsIG9wdF9leGFjdE1hdGNoPzogYm9vbGVhbik6IEVsZW1lbnRbXTtcbiAgZmluZE1vZGVscyhlbGVtZW50OiBFbGVtZW50LCBleHByZXNzaW9uOiBzdHJpbmcsIG9wdF9leGFjdE1hdGNoPzogYm9vbGVhbik6IEVsZW1lbnRbXTtcbiAgZ2V0TG9jYXRpb24oKTogc3RyaW5nO1xuICBzZXRMb2NhdGlvbih1cmw6IHN0cmluZyk6IHZvaWQ7XG4gIHdoZW5TdGFibGUoY2FsbGJhY2s6IEZ1bmN0aW9uKTogdm9pZDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJTmdNb2RlbENvbnRyb2xsZXIge1xuICAkcmVuZGVyKCk6IHZvaWQ7XG4gICRpc0VtcHR5KHZhbHVlOiBhbnkpOiBib29sZWFuO1xuICAkc2V0VmFsaWRpdHkodmFsaWRhdGlvbkVycm9yS2V5OiBzdHJpbmcsIGlzVmFsaWQ6IGJvb2xlYW4pOiB2b2lkO1xuICAkc2V0UHJpc3RpbmUoKTogdm9pZDtcbiAgJHNldERpcnR5KCk6IHZvaWQ7XG4gICRzZXRVbnRvdWNoZWQoKTogdm9pZDtcbiAgJHNldFRvdWNoZWQoKTogdm9pZDtcbiAgJHJvbGxiYWNrVmlld1ZhbHVlKCk6IHZvaWQ7XG4gICR2YWxpZGF0ZSgpOiB2b2lkO1xuICAkY29tbWl0Vmlld1ZhbHVlKCk6IHZvaWQ7XG4gICRzZXRWaWV3VmFsdWUodmFsdWU6IGFueSwgdHJpZ2dlcjogc3RyaW5nKTogdm9pZDtcblxuICAkdmlld1ZhbHVlOiBhbnk7XG4gICRtb2RlbFZhbHVlOiBhbnk7XG4gICRwYXJzZXJzOiBGdW5jdGlvbltdO1xuICAkZm9ybWF0dGVyczogRnVuY3Rpb25bXTtcbiAgJHZhbGlkYXRvcnM6IHtba2V5OiBzdHJpbmddOiBGdW5jdGlvbn07XG4gICRhc3luY1ZhbGlkYXRvcnM6IHtba2V5OiBzdHJpbmddOiBGdW5jdGlvbn07XG4gICR2aWV3Q2hhbmdlTGlzdGVuZXJzOiBGdW5jdGlvbltdO1xuICAkZXJyb3I6IE9iamVjdDtcbiAgJHBlbmRpbmc6IE9iamVjdDtcbiAgJHVudG91Y2hlZDogYm9vbGVhbjtcbiAgJHRvdWNoZWQ6IGJvb2xlYW47XG4gICRwcmlzdGluZTogYm9vbGVhbjtcbiAgJGRpcnR5OiBib29sZWFuO1xuICAkdmFsaWQ6IGJvb2xlYW47XG4gICRpbnZhbGlkOiBib29sZWFuO1xuICAkbmFtZTogc3RyaW5nO1xufVxuXG5mdW5jdGlvbiBub05nKCk6IG5ldmVyIHtcbiAgdGhyb3cgbmV3IEVycm9yKCdBbmd1bGFySlMgdjEueCBpcyBub3QgbG9hZGVkIScpO1xufVxuXG5jb25zdCBub05nRWxlbWVudDogdHlwZW9mIGFuZ3VsYXIuZWxlbWVudCA9ICgoKSA9PiBub05nKCkpIGFzIGFueTtcbm5vTmdFbGVtZW50LmNsZWFuRGF0YSA9IG5vTmc7XG5cbmxldCBhbmd1bGFyOiB7XG4gIGJvb3RzdHJhcDogKGU6IEVsZW1lbnQsIG1vZHVsZXM6IChzdHJpbmcgfCBJSW5qZWN0YWJsZSlbXSwgY29uZmlnPzogSUFuZ3VsYXJCb290c3RyYXBDb25maWcpID0+XG4gICAgICAgICAgICAgICAgIElJbmplY3RvclNlcnZpY2UsXG4gIG1vZHVsZTogKHByZWZpeDogc3RyaW5nLCBkZXBlbmRlbmNpZXM/OiBzdHJpbmdbXSkgPT4gSU1vZHVsZSxcbiAgZWxlbWVudDoge1xuICAgIChlOiBzdHJpbmcgfCBFbGVtZW50IHwgRG9jdW1lbnQgfCBJQXVnbWVudGVkSlF1ZXJ5KTogSUF1Z21lbnRlZEpRdWVyeTtcbiAgICBjbGVhbkRhdGE6IChub2RlczogTm9kZVtdIHwgTm9kZUxpc3QpID0+IHZvaWQ7XG4gIH0sXG4gIHZlcnNpb246IHttYWpvcjogbnVtYmVyfSxcbiAgcmVzdW1lQm9vdHN0cmFwOiAoKSA9PiB2b2lkLFxuICBnZXRUZXN0YWJpbGl0eTogKGU6IEVsZW1lbnQpID0+IElUZXN0YWJpbGl0eVNlcnZpY2Vcbn0gPSB7XG4gIGJvb3RzdHJhcDogbm9OZyxcbiAgbW9kdWxlOiBub05nLFxuICBlbGVtZW50OiBub05nRWxlbWVudCxcbiAgdmVyc2lvbjogdW5kZWZpbmVkIGFzIGFueSxcbiAgcmVzdW1lQm9vdHN0cmFwOiBub05nLFxuICBnZXRUZXN0YWJpbGl0eTogbm9OZ1xufTtcblxudHJ5IHtcbiAgaWYgKHdpbmRvdy5oYXNPd25Qcm9wZXJ0eSgnYW5ndWxhcicpKSB7XG4gICAgYW5ndWxhciA9ICg8YW55PndpbmRvdykuYW5ndWxhcjtcbiAgfVxufSBjYXRjaCAoZSkge1xuICAvLyBpZ25vcmUgaW4gQ0pTIG1vZGUuXG59XG5cbi8qKlxuICogQGRlcHJlY2F0ZWQgVXNlIGBzZXRBbmd1bGFySlNHbG9iYWxgIGluc3RlYWQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZXRBbmd1bGFyTGliKG5nOiBhbnkpOiB2b2lkIHtcbiAgc2V0QW5ndWxhckpTR2xvYmFsKG5nKTtcbn1cblxuLyoqXG4gKiBAZGVwcmVjYXRlZCBVc2UgYGdldEFuZ3VsYXJKU0dsb2JhbGAgaW5zdGVhZC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldEFuZ3VsYXJMaWIoKTogYW55IHtcbiAgcmV0dXJuIGdldEFuZ3VsYXJKU0dsb2JhbCgpO1xufVxuXG4vKipcbiAqIFJlc2V0cyB0aGUgQW5ndWxhckpTIGdsb2JhbC5cbiAqXG4gKiBVc2VkIHdoZW4gQW5ndWxhckpTIGlzIGxvYWRlZCBsYXppbHksIGFuZCBub3QgYXZhaWxhYmxlIG9uIGB3aW5kb3dgLlxuICovXG5leHBvcnQgZnVuY3Rpb24gc2V0QW5ndWxhckpTR2xvYmFsKG5nOiBhbnkpOiB2b2lkIHtcbiAgYW5ndWxhciA9IG5nO1xuICB2ZXJzaW9uID0gbmcgJiYgbmcudmVyc2lvbjtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBjdXJyZW50IEFuZ3VsYXJKUyBnbG9iYWwuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRBbmd1bGFySlNHbG9iYWwoKTogYW55IHtcbiAgcmV0dXJuIGFuZ3VsYXI7XG59XG5cbmV4cG9ydCBjb25zdCBib290c3RyYXA6IHR5cGVvZiBhbmd1bGFyLmJvb3RzdHJhcCA9IChlLCBtb2R1bGVzLCBjb25maWc/KSA9PlxuICAgIGFuZ3VsYXIuYm9vdHN0cmFwKGUsIG1vZHVsZXMsIGNvbmZpZyk7XG5cbmV4cG9ydCBjb25zdCBtb2R1bGU6IHR5cGVvZiBhbmd1bGFyLm1vZHVsZSA9IChwcmVmaXgsIGRlcGVuZGVuY2llcz8pID0+XG4gICAgYW5ndWxhci5tb2R1bGUocHJlZml4LCBkZXBlbmRlbmNpZXMpO1xuXG5leHBvcnQgY29uc3QgZWxlbWVudDogdHlwZW9mIGFuZ3VsYXIuZWxlbWVudCA9IChlID0+IGFuZ3VsYXIuZWxlbWVudChlKSkgYXMgdHlwZW9mIGFuZ3VsYXIuZWxlbWVudDtcbmVsZW1lbnQuY2xlYW5EYXRhID0gbm9kZXMgPT4gYW5ndWxhci5lbGVtZW50LmNsZWFuRGF0YShub2Rlcyk7XG5cbmV4cG9ydCBjb25zdCByZXN1bWVCb290c3RyYXA6IHR5cGVvZiBhbmd1bGFyLnJlc3VtZUJvb3RzdHJhcCA9ICgpID0+IGFuZ3VsYXIucmVzdW1lQm9vdHN0cmFwKCk7XG5cbmV4cG9ydCBjb25zdCBnZXRUZXN0YWJpbGl0eTogdHlwZW9mIGFuZ3VsYXIuZ2V0VGVzdGFiaWxpdHkgPSBlID0+IGFuZ3VsYXIuZ2V0VGVzdGFiaWxpdHkoZSk7XG5cbmV4cG9ydCBsZXQgdmVyc2lvbiA9IGFuZ3VsYXIudmVyc2lvbjtcbiJdfQ==