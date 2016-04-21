# movingPanel

Jero's Moving Panel - jQuery Plugin

You can make a panel which is fixed position on screen and dragable.

It is simple to use.

    $(#foo).movingPanel();

It takes an object:

    $(#foo).movingPanel({id : 'parentFoo', ....});
    
## Reference
 *  `id` : Set id of panel. Default value is "movingPanel";
 *  `borderWidth` : Set border width of panel. Default value is "0px";
 *  `borderColor` : Set border color of panel. Default value is "none";
 *  `border` : Set border of panel. Default value is " solid " + borderColor;
 *  `backgroundColor` : Set background color of panel. Default value is "none";
 *  `width` : Set width of panel. Default value is null;
 *  `height` : Set height of panel. Default value is null;
 *  `top` : Set top of panel. Default value is "0px";
 *  `left` : Set left of panel. Default value is "0px";
 *  `textAlign` : Set text align of panel. Default value is "center";
 *  `padding` : Set padding of panel. Default value is "0px";
 *  `containment` : Set padding of panel. Default value is Null. Possible string values: 'parent', 'document', 'window', [x1, y1, x2, y2].;
 *  `canDrag` : Set draggable of panel. Default value is true;
 *  `opacity` : Set opacity of panel. Default value is "1". Set value between 0 and 1;

## Licence
[MIT](http://opensource.org/licenses/mit-license.php)

Copyright (c) 2013 YongJin Kim

Released under the MIT license

http://opensource.org/licenses/mit-license.php

## Author

[YongJin Kim](https://github.com/Kim-YongJin)
