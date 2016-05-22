import riot from 'riot';

riot.tag(
  'form',
  '<form>{opts.children}</form>',
  function (opts) {
    var dispatcher = this.opts.store.dispatcher;
    // TODO Can we pass a function to the component children?
  }
)

riot.tag(
  'TextInput',
  '<input type="text" value="{value}" placeholder="{placeholder}" onChange="{onChange}" />',
  function (opts) {
  }
)
