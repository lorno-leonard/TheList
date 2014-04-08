/* TheList Script */
$( document ).ready(function() {
	$('ul.dropdown-menu.tl-sub-menu li').click(function() {
		$(this).addClass('tl-active').siblings().removeClass('tl-active');
		$(this).closest('li.dropdown').find('a .selected').text($(this).find('a').text());
	});
	$('#tl-slider').slider({
		range: true,
		step: 25,
		min: 0,
		max: 500,
		values: [0, 500],
		slide: function(event, ui) {
			var ref = $(this);
			var options = {animation: false};
			var min = (ui.values[0] == 0 ? 'FREE' : (ui.values[0] == 500 ? '$500+' : '$' + ui.values[0]));
			var max = (ui.values[1] == 0 ? 'FREE' : (ui.values[1] == 500 ? '$500+' : '$' + ui.values[1]));
			var fn_show_tooltip = function(e) {
				ref.find('a').tooltip('show');
			};
			ref.closest('li.dropdown').find('a .selected').text(min + ' - ' + max);

			ref.find('a:first').trigger('blur').attr('title', min).tooltip('hide').attr('data-original-title', min).tooltip('fixTitle').tooltip('show');
			ref.find('a:last').trigger('blur').attr('title', max).tooltip('hide').attr('data-original-title', max).tooltip('fixTitle').tooltip('show');
		},
		create: function(event, ui) {
			var ref = $(this);
			var options = {animation: false};
			var values = $('#tl-slider').slider('values');
			var min = (values[0] == 0 ? 'FREE' : (values[0] == 500 ? '$500+' : '$' + values[0]));
			var max = (values[1] == 0 ? 'FREE' : (values[1] == 500 ? '$500+' : '$' + values[1]));
			var fn_show_tooltip = function(e) {
				ref.find('a').tooltip('show');
			};
			var fn_disp_tooltip_fast = function(e) {
				$('.dropdown-menu.tl-price-range').show();
				ref.find('a:first').trigger('mouseenter');
				ref.find('a:last').trigger('mouseenter');
				$('.dropdown-menu.tl-price-range').hide().css('display', '');
			};

			ref.find('a').attr('data-toggle', 'tooltip').attr('data-placement', 'bottom');
			ref.find('a:first').attr('title', min);
			ref.find('a:last').attr('title', max);
			ref.find('a').tooltip(options).mouseenter(fn_show_tooltip).mouseleave(fn_show_tooltip).blur(fn_show_tooltip);
			setTimeout(fn_disp_tooltip_fast, 100);
		}
	});
});
