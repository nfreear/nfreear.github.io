/*!
  NDF, 16-July-2018.
*/

window.jQuery(function ($) {
  const fetch = window.fetch;
  const $COMMENT_FORM = $('#comment-form');
  const ACTION = $COMMENT_FORM.attr('action');
  const $MESSAGE = $COMMENT_FORM.find('.message');
  // const FIELDS = $COMMENT_FORM.find('input, textarea').filter('[name]');

  $COMMENT_FORM.on('submit', function (ev) {
    // alert('HI');
    $MESSAGE.text('Submitting comment ...').addClass('waiting');

    $COMMENT_FORM.find('[ name *= redirect ]').attr('name', 'options[x-redirect]');

    ev.preventDefault();

    console.warn('Comment submit:', ACTION, $COMMENT_FORM.serialize(), params($COMMENT_FORM), noRedirect);

    fetch(ACTION, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        // 'Content-Type': 'application/json; charset=utf-8'
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      redirect: 'manual', // 'follow',
      body: $COMMENT_FORM.serialize() // JSON.stringify(params($COMMENT_FORM))
    })
    .then(response => {
      // function checkStatus(response) {
      if (response.ok) {
        return Promise.resolve(response);
      }

      return response.json().then(json => {
        const error = new Error(json.message || response.statusText);
        return Promise.reject(Object.assign(error, { response }));
      });
      // }
    })
    .then(data => {
      if (data.success) {
        console.warn('Staticman OK:', data);

        $MESSAGE.text('Thank you! Comment in moderation queue.').addClass('success');
      } else {
        console.error('Staticman Error:', data);

        $MESSAGE.text('Error. ' + data.errorCode).addClass('error');
      }
    })
    .catch(error => console.error('Staticman Error (2):', error));
  });

  console.warn('Comment.js loaded:', $COMMENT_FORM, ACTION, params($COMMENT_FORM));

  // DEPRECATED!
  function params ($form) {
    var paramObj = {};

    $.each($form.serializeArray(), function (_, kv) {
      /* if (paramObj.hasOwnProperty(kv.name)) {
        paramObj[kv.name] = $.makeArray(paramObj[kv.name]);
        paramObj[kv.name].push(kv.value);
      }
      else { */
      paramObj[ kv.name ] = kv.value;
      // }
    });

    return paramObj;
  }

  // DEPRECATED!
  function noRedirect (paramObj) {
    paramObj[ 'options[X-redirect]' ] = paramObj[ 'options[redirect]' ];
    paramObj[ 'options[redirect]' ] = '';

    return paramObj;
  }
});
