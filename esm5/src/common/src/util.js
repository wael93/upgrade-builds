/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { DOWNGRADED_MODULE_COUNT_KEY, UPGRADE_APP_TYPE_KEY } from './constants';
var DIRECTIVE_PREFIX_REGEXP = /^(?:x|data)[:\-_]/i;
var DIRECTIVE_SPECIAL_CHARS_REGEXP = /[:\-_]+(.)/g;
export function onError(e) {
    // TODO: (misko): We seem to not have a stack trace here!
    if (console.error) {
        console.error(e, e.stack);
    }
    else {
        // tslint:disable-next-line:no-console
        console.log(e, e.stack);
    }
    throw e;
}
export function controllerKey(name) {
    return '$' + name + 'Controller';
}
export function directiveNormalize(name) {
    return name.replace(DIRECTIVE_PREFIX_REGEXP, '')
        .replace(DIRECTIVE_SPECIAL_CHARS_REGEXP, function (_, letter) { return letter.toUpperCase(); });
}
export function getTypeName(type) {
    // Return the name of the type or the first line of its stringified version.
    return type.overriddenName || type.name || type.toString().split('\n')[0];
}
export function getDowngradedModuleCount($injector) {
    return $injector.has(DOWNGRADED_MODULE_COUNT_KEY) ? $injector.get(DOWNGRADED_MODULE_COUNT_KEY) :
        0;
}
export function getUpgradeAppType($injector) {
    return $injector.has(UPGRADE_APP_TYPE_KEY) ? $injector.get(UPGRADE_APP_TYPE_KEY) :
        0 /* None */;
}
export function isFunction(value) {
    return typeof value === 'function';
}
export function validateInjectionKey($injector, downgradedModule, injectionKey, attemptedAction) {
    var upgradeAppType = getUpgradeAppType($injector);
    var downgradedModuleCount = getDowngradedModuleCount($injector);
    // Check for common errors.
    switch (upgradeAppType) {
        case 1 /* Dynamic */:
        case 2 /* Static */:
            if (downgradedModule) {
                throw new Error("Error while " + attemptedAction + ": 'downgradedModule' unexpectedly specified.\n" +
                    'You should not specify a value for \'downgradedModule\', unless you are downgrading ' +
                    'more than one Angular module (via \'downgradeModule()\').');
            }
            break;
        case 3 /* Lite */:
            if (!downgradedModule && (downgradedModuleCount >= 2)) {
                throw new Error("Error while " + attemptedAction + ": 'downgradedModule' not specified.\n" +
                    'This application contains more than one downgraded Angular module, thus you need to ' +
                    'always specify \'downgradedModule\' when downgrading components and injectables.');
            }
            if (!$injector.has(injectionKey)) {
                throw new Error("Error while " + attemptedAction + ": Unable to find the specified downgraded module.\n" +
                    'Did you forget to downgrade an Angular module or include it in the AngularJS ' +
                    'application?');
            }
            break;
        default:
            throw new Error("Error while " + attemptedAction + ": Not a valid '@angular/upgrade' application.\n" +
                'Did you forget to downgrade an Angular module or include it in the AngularJS ' +
                'application?');
    }
}
var Deferred = /** @class */ (function () {
    function Deferred() {
        var _this = this;
        this.promise = new Promise(function (res, rej) {
            _this.resolve = res;
            _this.reject = rej;
        });
    }
    return Deferred;
}());
export { Deferred };
/**
 * @return Whether the passed-in component implements the subset of the
 *     `ControlValueAccessor` interface needed for AngularJS `ng-model`
 *     compatibility.
 */
function supportsNgModel(component) {
    return typeof component.writeValue === 'function' &&
        typeof component.registerOnChange === 'function';
}
/**
 * Glue the AngularJS `NgModelController` (if it exists) to the component
 * (if it implements the needed subset of the `ControlValueAccessor` interface).
 */
export function hookupNgModel(ngModel, component) {
    if (ngModel && supportsNgModel(component)) {
        ngModel.$render = function () { component.writeValue(ngModel.$viewValue); };
        component.registerOnChange(ngModel.$setViewValue.bind(ngModel));
        if (typeof component.registerOnTouched === 'function') {
            component.registerOnTouched(ngModel.$setTouched.bind(ngModel));
        }
    }
}
/**
 * Test two values for strict equality, accounting for the fact that `NaN !== NaN`.
 */
export function strictEquals(val1, val2) {
    return val1 === val2 || (val1 !== val1 && val2 !== val2);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3VwZ3JhZGUvc3JjL2NvbW1vbi9zcmMvdXRpbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFLSCxPQUFPLEVBQUMsMkJBQTJCLEVBQUUsb0JBQW9CLEVBQUMsTUFBTSxhQUFhLENBQUM7QUFFOUUsSUFBTSx1QkFBdUIsR0FBRyxvQkFBb0IsQ0FBQztBQUNyRCxJQUFNLDhCQUE4QixHQUFHLGFBQWEsQ0FBQztBQUVyRCxNQUFNLFVBQVUsT0FBTyxDQUFDLENBQU07SUFDNUIseURBQXlEO0lBQ3pELElBQUksT0FBTyxDQUFDLEtBQUssRUFBRTtRQUNqQixPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDM0I7U0FBTTtRQUNMLHNDQUFzQztRQUN0QyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDekI7SUFDRCxNQUFNLENBQUMsQ0FBQztBQUNWLENBQUM7QUFFRCxNQUFNLFVBQVUsYUFBYSxDQUFDLElBQVk7SUFDeEMsT0FBTyxHQUFHLEdBQUcsSUFBSSxHQUFHLFlBQVksQ0FBQztBQUNuQyxDQUFDO0FBRUQsTUFBTSxVQUFVLGtCQUFrQixDQUFDLElBQVk7SUFDN0MsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLHVCQUF1QixFQUFFLEVBQUUsQ0FBQztTQUMzQyxPQUFPLENBQUMsOEJBQThCLEVBQUUsVUFBQyxDQUFDLEVBQUUsTUFBTSxJQUFLLE9BQUEsTUFBTSxDQUFDLFdBQVcsRUFBRSxFQUFwQixDQUFvQixDQUFDLENBQUM7QUFDcEYsQ0FBQztBQUVELE1BQU0sVUFBVSxXQUFXLENBQUMsSUFBZTtJQUN6Qyw0RUFBNEU7SUFDNUUsT0FBUSxJQUFZLENBQUMsY0FB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QUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDaEUsSUFBSSxPQUFPLFNBQVMsQ0FBQyxpQkFBaUIsS0FBSyxVQUFVLEVBQUU7WUFDckQsU0FBUyxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7U0FDaEU7S0FDRjtBQUNILENBQUM7QUFFRDs7R0FFRztBQUNILE1BQU0sVUFBVSxZQUFZLENBQUMsSUFBUyxFQUFFLElBQVM7SUFDL0MsT0FBTyxJQUFJLEtBQUssSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLElBQUksSUFBSSxJQUFJLEtBQUssSUFBSSxDQUFDLENBQUM7QUFDM0QsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtJbmplY3RvciwgVHlwZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7SUluamVjdG9yU2VydmljZSwgSU5nTW9kZWxDb250cm9sbGVyfSBmcm9tICcuL2FuZ3VsYXIxJztcbmltcG9ydCB7RE9XTkdSQURFRF9NT0RVTEVfQ09VTlRfS0VZLCBVUEdSQURFX0FQUF9UWVBFX0tFWX0gZnJvbSAnLi9jb25zdGFudHMnO1xuXG5jb25zdCBESVJFQ1RJVkVfUFJFRklYX1JFR0VYUCA9IC9eKD86eHxkYXRhKVs6XFwtX10vaTtcbmNvbnN0IERJUkVDVElWRV9TUEVDSUFMX0NIQVJTX1JFR0VYUCA9IC9bOlxcLV9dKyguKS9nO1xuXG5leHBvcnQgZnVuY3Rpb24gb25FcnJvcihlOiBhbnkpIHtcbiAgLy8gVE9ETzogKG1pc2tvKTogV2Ugc2VlbSB0byBub3QgaGF2ZSBhIHN0YWNrIHRyYWNlIGhlcmUhXG4gIGlmIChjb25zb2xlLmVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihlLCBlLnN0YWNrKTtcbiAgfSBlbHNlIHtcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tY29uc29sZVxuICAgIGNvbnNvbGUubG9nKGUsIGUuc3RhY2spO1xuICB9XG4gIHRocm93IGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb250cm9sbGVyS2V5KG5hbWU6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiAnJCcgKyBuYW1lICsgJ0NvbnRyb2xsZXInO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGlyZWN0aXZlTm9ybWFsaXplKG5hbWU6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBuYW1lLnJlcGxhY2UoRElSRUNUSVZFX1BSRUZJWF9SRUdFWFAsICcnKVxuICAgICAgLnJlcGxhY2UoRElSRUNUSVZFX1NQRUNJQUxfQ0hBUlNfUkVHRVhQLCAoXywgbGV0dGVyKSA9PiBsZXR0ZXIudG9VcHBlckNhc2UoKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRUeXBlTmFtZSh0eXBlOiBUeXBlPGFueT4pOiBzdHJpbmcge1xuICAvLyBSZXR1cm4gdGhlIG5hbWUgb2YgdGhlIHR5cGUgb3IgdGhlIGZpcnN0IGxpbmUgb2YgaXRzIHN0cmluZ2lmaWVkIHZlcnNpb24uXG4gIHJldHVybiAodHlwZSBhcyBhbnkpLm92ZXJyaWRkZW5OYW1lIHx8IHR5cGUubmFtZSB8fCB0eXBlLnRvU3RyaW5nKCkuc3BsaXQoJ1xcbicpWzBdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RG93bmdyYWRlZE1vZHVsZUNvdW50KCRpbmplY3RvcjogSUluamVjdG9yU2VydmljZSk6IG51bWJlciB7XG4gIHJldHVybiAkaW5qZWN0b3IuaGFzKERPV05HUkFERURfTU9EVUxFX0NPVU5UX0tFWSkgPyAkaW5qZWN0b3IuZ2V0KERPV05HUkFERURfTU9EVUxFX0NPVU5UX0tFWSkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFVwZ3JhZGVBcHBUeXBlKCRpbmplY3RvcjogSUluamVjdG9yU2VydmljZSk6IFVwZ3JhZGVBcHBUeXBlIHtcbiAgcmV0dXJuICRpbmplY3Rvci5oYXMoVVBHUkFERV9BUFBfVFlQRV9LRVkpID8gJGluamVjdG9yLmdldChVUEdSQURFX0FQUF9UWVBFX0tFWSkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBVcGdyYWRlQXBwVHlwZS5Ob25lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNGdW5jdGlvbih2YWx1ZTogYW55KTogdmFsdWUgaXMgRnVuY3Rpb24ge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFsaWRhdGVJbmplY3Rpb25LZXkoXG4gICAgJGluamVjdG9yOiBJSW5qZWN0b3JTZXJ2aWNlLCBkb3duZ3JhZGVkTW9kdWxlOiBzdHJpbmcsIGluamVjdGlvbktleTogc3RyaW5nLFxuICAgIGF0dGVtcHRlZEFjdGlvbjogc3RyaW5nKTogdm9pZCB7XG4gIGNvbnN0IHVwZ3JhZGVBcHBUeXBlID0gZ2V0VXBncmFkZUFwcFR5cGUoJGluamVjdG9yKTtcbiAgY29uc3QgZG93bmdyYWRlZE1vZHVsZUNvdW50ID0gZ2V0RG93bmdyYWRlZE1vZHVsZUNvdW50KCRpbmplY3Rvcik7XG5cbiAgLy8gQ2hlY2sgZm9yIGNvbW1vbiBlcnJvcnMuXG4gIHN3aXRjaCAodXBncmFkZUFwcFR5cGUpIHtcbiAgICBjYXNlIFVwZ3JhZGVBcHBUeXBlLkR5bmFtaWM6XG4gICAgY2FzZSBVcGdyYWRlQXBwVHlwZS5TdGF0aWM6XG4gICAgICBpZiAoZG93bmdyYWRlZE1vZHVsZSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICBgRXJyb3Igd2hpbGUgJHthdHRlbXB0ZWRBY3Rpb259OiAnZG93bmdyYWRlZE1vZHVsZScgdW5leHBlY3RlZGx5IHNwZWNpZmllZC5cXG5gICtcbiAgICAgICAgICAgICdZb3Ugc2hvdWxkIG5vdCBzcGVjaWZ5IGEgdmFsdWUgZm9yIFxcJ2Rvd25ncmFkZWRNb2R1bGVcXCcsIHVubGVzcyB5b3UgYXJlIGRvd25ncmFkaW5nICcgK1xuICAgICAgICAgICAgJ21vcmUgdGhhbiBvbmUgQW5ndWxhciBtb2R1bGUgKHZpYSBcXCdkb3duZ3JhZGVNb2R1bGUoKVxcJykuJyk7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBjYXNlIFVwZ3JhZGVBcHBUeXBlLkxpdGU6XG4gICAgICBpZiAoIWRvd25ncmFkZWRNb2R1bGUgJiYgKGRvd25ncmFkZWRNb2R1bGVDb3VudCA+PSAyKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICBgRXJyb3Igd2hpbGUgJHthdHRlbXB0ZWRBY3Rpb259OiAnZG93bmdyYWRlZE1vZHVsZScgbm90IHNwZWNpZmllZC5cXG5gICtcbiAgICAgICAgICAgICdUaGlzIGFwcGxpY2F0aW9uIGNvbnRhaW5zIG1vcmUgdGhhbiBvbmUgZG93bmdyYWRlZCBBbmd1bGFyIG1vZHVsZSwgdGh1cyB5b3UgbmVlZCB0byAnICtcbiAgICAgICAgICAgICdhbHdheXMgc3BlY2lmeSBcXCdkb3duZ3JhZGVkTW9kdWxlXFwnIHdoZW4gZG93bmdyYWRpbmcgY29tcG9uZW50cyBhbmQgaW5qZWN0YWJsZXMuJyk7XG4gICAgICB9XG5cbiAgICAgIGlmICghJGluamVjdG9yLmhhcyhpbmplY3Rpb25LZXkpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIGBFcnJvciB3aGlsZSAke2F0dGVtcHRlZEFjdGlvbn06IFVuYWJsZSB0byBmaW5kIHRoZSBzcGVjaWZpZWQgZG93bmdyYWRlZCBtb2R1bGUuXFxuYCArXG4gICAgICAgICAgICAnRGlkIHlvdSBmb3JnZXQgdG8gZG93bmdyYWRlIGFuIEFuZ3VsYXIgbW9kdWxlIG9yIGluY2x1ZGUgaXQgaW4gdGhlIEFuZ3VsYXJKUyAnICtcbiAgICAgICAgICAgICdhcHBsaWNhdGlvbj8nKTtcbiAgICAgIH1cblxuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICBgRXJyb3Igd2hpbGUgJHthdHRlbXB0ZWRBY3Rpb259OiBOb3QgYSB2YWxpZCAnQGFuZ3VsYXIvdXBncmFkZScgYXBwbGljYXRpb24uXFxuYCArXG4gICAgICAgICAgJ0RpZCB5b3UgZm9yZ2V0IHRvIGRvd25ncmFkZSBhbiBBbmd1bGFyIG1vZHVsZSBvciBpbmNsdWRlIGl0IGluIHRoZSBBbmd1bGFySlMgJyArXG4gICAgICAgICAgJ2FwcGxpY2F0aW9uPycpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEZWZlcnJlZDxSPiB7XG4gIHByb21pc2U6IFByb21pc2U8Uj47XG4gIC8vIFRPRE8oaXNzdWUvMjQ1NzEpOiByZW1vdmUgJyEnLlxuICByZXNvbHZlICE6ICh2YWx1ZT86IFIgfCBQcm9taXNlTGlrZTxSPikgPT4gdm9pZDtcbiAgLy8gVE9ETyhpc3N1ZS8yNDU3MSk6IHJlbW92ZSAnIScuXG4gIHJlamVjdCAhOiAoZXJyb3I/OiBhbnkpID0+IHZvaWQ7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5wcm9taXNlID0gbmV3IFByb21pc2UoKHJlcywgcmVqKSA9PiB7XG4gICAgICB0aGlzLnJlc29sdmUgPSByZXM7XG4gICAgICB0aGlzLnJlamVjdCA9IHJlajtcbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIExhenlNb2R1bGVSZWYge1xuICBpbmplY3Rvcj86IEluamVjdG9yO1xuICBwcm9taXNlPzogUHJvbWlzZTxJbmplY3Rvcj47XG59XG5cbmV4cG9ydCBjb25zdCBlbnVtIFVwZ3JhZGVBcHBUeXBlIHtcbiAgLy8gQXBwIE5PVCB1c2luZyBgQGFuZ3VsYXIvdXBncmFkZWAuIChUaGlzIHNob3VsZCBuZXZlciBoYXBwZW4gaW4gYW4gYG5nVXBncmFkZWAgYXBwLilcbiAgTm9uZSxcblxuICAvLyBBcHAgdXNpbmcgdGhlIGRlcHJlY2F0ZWQgYEBhbmd1bGFyL3VwZ3JhZGVgIEFQSXMgKGEuay5hLiBkeW5hbWljIGBuZ1VwZ3JhZGVgKS5cbiAgRHluYW1pYyxcblxuICAvLyBBcHAgdXNpbmcgYEBhbmd1bGFyL3VwZ3JhZGUvc3RhdGljYCB3aXRoIGBVcGdyYWRlTW9kdWxlYC5cbiAgU3RhdGljLFxuXG4gIC8vIEFwcCB1c2luZyBAYW5ndWxhci91cGdyYWRlL3N0YXRpY2Agd2l0aCBgZG93bmdyYWRlTW9kdWxlKClgIChhLmsuYSBgbmdVcGdyYWRlYC1saXRlICkuXG4gIExpdGUsXG59XG5cbi8qKlxuICogQHJldHVybiBXaGV0aGVyIHRoZSBwYXNzZWQtaW4gY29tcG9uZW50IGltcGxlbWVudHMgdGhlIHN1YnNldCBvZiB0aGVcbiAqICAgICBgQ29udHJvbFZhbHVlQWNjZXNzb3JgIGludGVyZmFjZSBuZWVkZWQgZm9yIEFuZ3VsYXJKUyBgbmctbW9kZWxgXG4gKiAgICAgY29tcGF0aWJpbGl0eS5cbiAqL1xuZnVuY3Rpb24gc3VwcG9ydHNOZ01vZGVsKGNvbXBvbmVudDogYW55KSB7XG4gIHJldHVybiB0eXBlb2YgY29tcG9uZW50LndyaXRlVmFsdWUgPT09ICdmdW5jdGlvbicgJiZcbiAgICAgIHR5cGVvZiBjb21wb25lbnQucmVnaXN0ZXJPbkNoYW5nZSA9PT0gJ2Z1bmN0aW9uJztcbn1cblxuLyoqXG4gKiBHbHVlIHRoZSBBbmd1bGFySlMgYE5nTW9kZWxDb250cm9sbGVyYCAoaWYgaXQgZXhpc3RzKSB0byB0aGUgY29tcG9uZW50XG4gKiAoaWYgaXQgaW1wbGVtZW50cyB0aGUgbmVlZGVkIHN1YnNldCBvZiB0aGUgYENvbnRyb2xWYWx1ZUFjY2Vzc29yYCBpbnRlcmZhY2UpLlxuICovXG5leHBvcnQgZnVuY3Rpb24gaG9va3VwTmdNb2RlbChuZ01vZGVsOiBJTmdNb2RlbENvbnRyb2xsZXIsIGNvbXBvbmVudDogYW55KSB7XG4gIGlmIChuZ01vZGVsICYmIHN1cHBvcnRzTmdNb2RlbChjb21wb25lbnQpKSB7XG4gICAgbmdNb2RlbC4kcmVuZGVyID0gKCkgPT4geyBjb21wb25lbnQud3JpdGVWYWx1ZShuZ01vZGVsLiR2aWV3VmFsdWUpOyB9O1xuICAgIGNvbXBvbmVudC5yZWdpc3Rlck9uQ2hhbmdlKG5nTW9kZWwuJHNldFZpZXdWYWx1ZS5iaW5kKG5nTW9kZWwpKTtcbiAgICBpZiAodHlwZW9mIGNvbXBvbmVudC5yZWdpc3Rlck9uVG91Y2hlZCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY29tcG9uZW50LnJlZ2lzdGVyT25Ub3VjaGVkKG5nTW9kZWwuJHNldFRvdWNoZWQuYmluZChuZ01vZGVsKSk7XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogVGVzdCB0d28gdmFsdWVzIGZvciBzdHJpY3QgZXF1YWxpdHksIGFjY291bnRpbmcgZm9yIHRoZSBmYWN0IHRoYXQgYE5hTiAhPT0gTmFOYC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN0cmljdEVxdWFscyh2YWwxOiBhbnksIHZhbDI6IGFueSk6IGJvb2xlYW4ge1xuICByZXR1cm4gdmFsMSA9PT0gdmFsMiB8fCAodmFsMSAhPT0gdmFsMSAmJiB2YWwyICE9PSB2YWwyKTtcbn1cbiJdfQ==