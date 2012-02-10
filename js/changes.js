// JavaScript Document

$(document).ready(function () {

	var $circle = $('#circle');
	var $properties = $('#properties');
	var $colour = $('#colour');

	$('form').on('submit', function (e) {
		var colour = $colour.val();
		e.preventDefault();

		if (colour) {
		$circle.css($properties.val(), colour);
		}
	});

	$('#hide-show').on('click', function (e) {
		$circle.toggle('slow');
	});
});