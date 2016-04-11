/**
 * @license Copyright © 2013 Stuart Sillitoe <stuart@vericode.co.uk>
 * strInsert – A Custom Dropdown in CKEditor 4
 * This is open source, can modify it as you wish.
 *
 * strInsert by Stuart Sillitoe
 * stuartsillitoe.co.uk
 *
 */
CKEDITOR.plugins.add('strinsert',
{
  requires : ['richcombo'],
  init : function( editor )
  {
// array of strings to choose from that'll be inserted into the editor
    var strings = [];
    strings.push(['(=$logo=)', 'Company logo', 'Company logo as set in Company Settings']);
    strings.push(['(=$date=)', 'Today\'s date', 'Today\'s date (date email is sent)']);
    strings.push(['(=$company_code=)', 'Company SAM code', 'Your company\'s SAM code']);
    strings.push(['(=$facility_name=)', 'Location Name', 'Name of your location']);
    strings.push(['(=$facility_phone=)', 'Location Phone #', 'Phone number of your location']);
    strings.push(['(=$facility_website=)', 'Location Website', 'Website for your location']);
    strings.push(['(=$facility_email=)', 'Location Email', 'Email for your location']);
    strings.push(['(=$facility_address=)', 'Location Address', 'Location address']);
    strings.push(['(=$online_support_phone=)', 'Online Support Phone', 'Online support phone']);
    strings.push(['(=$online_support_email=)', 'Online Support Email', 'Online support email']);
    strings.push(['(=$online_login=)', 'Online login link', 'Online login link']);
    strings.push(['(=$facebook=)', 'Facebook link', 'Facebook link']);

// add the menu to the editor
    editor.ui.addRichCombo('strinsert',
    {
      label: 'Template Variables',
      title: 'Template Variables',
      voiceLabel: 'Template Variables',
      className: 'cke_format',
      multiSelect:false,
        panel:
      {
        css: [ editor.config.contentsCss, CKEDITOR.skin.getPath('editor') ],
        voiceLabel: editor.lang.panelVoiceLabel
      },

      init: function()
      {
        this.startGroup( "Insert Content" );
        for (var i in strings)
        {
          this.add(strings[i][0], strings[i][1], strings[i][2]);
        }
      },

      onClick: function( value )
      {
        editor.focus();
        editor.fire( 'saveSnapshot' );
        editor.insertHtml(value);
        editor.fire( 'saveSnapshot' );
      }
    });
  }
});
