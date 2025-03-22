
import Alpine from "alpinejs";
import focus from "@alpinejs/focus";
import collapse from "@alpinejs/collapse";
import manage from "alpinejs-manage";

import { capitalizeDirective } from "$ui/scripts/alpine/directive/capitalize.directive";
import { logDirective } from "$ui/scripts/alpine/directive/log.directive";
import { clipboardMagic } from "$ui/scripts/alpine/magic/clipboard.magic";
import { nowMagic } from "$ui/scripts/alpine/magic/now.magic";

/* Directive */
Alpine.directive("capitalize", capitalizeDirective);
Alpine.directive("log", logDirective);

/* Magic */
Alpine.magic("clipboard", clipboardMagic);
Alpine.magic("now", nowMagic);

/* Plugins */
Alpine.plugin(focus);
Alpine.plugin(collapse);
Alpine.plugin(manage);

export default Alpine;
