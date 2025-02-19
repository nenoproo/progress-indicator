let mainHeight = main.scrollHeight - main.clientHeight;
main.scrollHeight: The total height of the content inside the main element, including content that's out of view (i.e., content that requires scrolling).
main.clientHeight: The visible height of the main element, which is the area visible without scrolling.
mainHeight: This calculates the difference between the total content height (scrollHeight) and the visible area (clientHeight), effectively giving you the height of the hidden content that’s currently not visible (the scrollable area).


let scrollPosition = main.scrollTop;
main.scrollTop: This property gets the current vertical scroll position of the main element. It returns the number of pixels that the content of the main element has been scrolled vertically.

scrollPosition: This stores the current scroll position (in pixels) from the top of the main element. A value of 0 means it's at the top, and a larger value indicates how far down the content has been scrolled.


let progress = scrollPosition / mainHeight;
Explanation: Calculates the scroll progress as a fraction of the total height.
Result: progress will be a value between 0 and 1 indicating how far the user has scrolled (where 0 is the top and 1 is the bottom).

let progressPercentage = (progress * 100 + "%");
Explanation: Converts the progress value into a percentage for display.
Result: progressPercentage is the scroll progress as a string (e.g., "50%"), which is often used to show progress in a visual indicator (like a progress bar).