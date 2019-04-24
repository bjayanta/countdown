# Countdown jQuery plugin
This jQuery plugin able to calculate the given datetime to curent datetime and convart to **days**, **hours**, **minutes** and **seconds**. 

## Dependance
* [jQuery](https://code.jquery.com/jquery-3.3.1.slim.min.js) 

## Basic Usage
### HTML Code 
```html
<div id="countdown"></div>
```

**Include the countdown.js file**

### jQuery Code
```javascript
<script>
    $(document).ready(function() {
        $('#countdown').countdown({
            datetime: 'April 30, 2019 12:00:00',
            success: function(response) { // optional
                console.log(response);
            }
        });
    });
</script>
```

## Options
| Options   | Description                  | Default                                    |
| --------- | ---------------------------- | ------------------------------------------ |
| datetime  | Requird. Datetime (April 30, 2019 12:00:00)           | Null               |
| success   | Function with response param. This *response* param hold the total record data (days, hours, minutes, seconds) | null                                       |


Thanks