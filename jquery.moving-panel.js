/*!
 * Name: Jero moving panel
 * version 1.0 (15-JAN-2013)
 * Requires jQuery v1.2.3 or later
 * Requires jQuery-ui v1.3.2 or later
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 * Authors: YongJin Kim
 */

/**
 *  movingPanel() takes an object:  var control = movingPanel({id : 'foo', ....});
 *  Properties of object is below.
 *
 *  id : Set id of panel. Default value is "movingPanel";
 *  borderWidth : Set border width of panel. Default value is "2px";
 *  borderColor : Set border color of panel. Default value is "#FF9999";
 *  border : Set border of panel. Default value is " solid " + borderColor;
 *  backgroundColor : Set background color of panel. Default value is "#FFEEAA";
 *  width : Set width of panel. Default value is null;
 *  height : Set height of panel. Default value is null;
 *  top : Set top of panel. Default value is "0px";
 *  left : Set left of panel. Default value is "0px";
 *  textAlign : Set text align of panel. Default value is "center";
 *  padding : Set padding of panel. Default value is "0px";
 *  containment : Set padding of panel. Default value is Null. Possible string values: 'parent', 'document', 'window', [x1, y1, x2, y2].;
 *  canDrag : Set draggable of panel. Default value is true;
 *  opacity : Set opacity of panel. Default value is "1". Set value between 0 and 1;
 */

(function($) { 
	$.fn.movingPanel = function(arg) { 
		var property = arg || {};
		var id = property.id || "movingPanel";
		var borderWidth = property.borderWidth || "0px";
		var borderColor = property.borderColor || "none";
		var border = property.border || borderWidth + " solid " + borderColor;
		var backgroundColor = property.backgroundColor || "none";
		var width = property.width;
		var height = property.height;
		var top = property.top || "0px";
		var left = property.left || "0px";
		var textAlign = property.textAlign || "center";
		var padding = property.padding || "0px";
		var containment = property.containment || null;
		var canDrag = property.canDrag === false ? false : true;
		var opacity = property.opacity || 1;    

		var userAgent = {
			isLtIE6 : typeof window.addEventListener == "undefined" && typeof document.documentElement.style.maxHeight == "undefined",
			isLtIE7 : typeof window.addEventListener == "undefined" && typeof document.querySelectorAll == "undefined",
			isLtIE8 : typeof window.addEventListener == "undefined" && typeof document.getElementsByClassName == "undefined",
			isIE : document.uniqueID,
			isFirefox : window.sidebar,
			isOpera : window.opera,
			isWebkit : !document.uniqueID && !window.opera && !window.sidebar && window.localStorage && typeof window.orientation == "undefined",
			isMobile : typeof window.orientation != "undefined"
		};

		$( "body" ).append('<div id="' + id + '"></div>');
		$( "#" + id ).html(this);
		if (canDrag) {
			$( "#" + id ).draggable({containment: containment});
		}
		if (!userAgent.isLtIE6) {
			$( "#" + id ).css({cssText: "position: fixed !important"});
		} else {
			$( "#" + id ).css({cssText: "position: absolute !important"});

			var beforeTop = 0;
			var beforeLeft = 0;
			$(window).scroll(function() {
				var panelTop = parseInt($( "#" + id ).css("top").replace("px",""));
				var exTop = panelTop + ($(window).scrollTop() - beforeTop);
				beforeTop = $(window).scrollTop();
				$( "#" + id ).css("top", exTop);

				var panelLeft = parseInt($( "#" + id ).css("left").replace("px",""));
				var exLeft = panelLeft + ($(window).scrollLeft() - beforeLeft);
				beforeLeft = $(window).scrollLeft();
				$( "#" + id ).css("left", exLeft);
			});

			$( "#" + id ).css("filter", "alpha(opacity=" + (opacity * 100) + ")");
		}

		$( "#" + id ).css({
			backgroundColor: backgroundColor,
			borderWidth: borderWidth,
			borderColor: borderColor,
			top: top,
			left: left,
			width: width,
			height: height,
			border: border,
			padding: padding,
			textAlign: textAlign,
			display: "inline-block",
			opacity: opacity,
			zoom: 1
		});
		if (canDrag) {
			$( "#" + id ).css({
				cursor: "move"
			});
		}
		return this;
	};
})(jQuery);