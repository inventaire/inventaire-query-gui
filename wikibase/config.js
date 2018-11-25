/* exported CONFIG */
var CONFIG = ( function ( window, $ ) {
	'use strict';

	function getUserLanguage() {
		var lang = ( navigator.languages && navigator.languages[0] ) ||
			navigator.language ||
			navigator.userLanguage;

		if ( lang && typeof lang === 'string' ) {
			return lang.split( '-' ).shift();
		}

		return null;
	}

	var root = 'https://query.inventaire.io/';

	var configDeploy = {
		language: getUserLanguage() || 'en',
		api: {
			sparql: {
				uri: '/sparql'
			},
			wikibase: {
				uri: 'https://www.wikidata.org/w/api.php'
			}
		},
		i18nLoad: function( lang ) {
			var loadFallbackLang = null;
			if ( lang !== this.language ) {
				//load default language as fallback language
				loadFallbackLang = $.i18n().load( 'i18n', this.language );
			}
			return $.when(
					loadFallbackLang,
					$.i18n().load( 'i18n', lang )
				);
		},
		brand: {
			logo: 'https://inventaire.io/public/icon/120.png',
			title: 'Inventaire Query'
		},
		location: {
			root: root,
			index: root
		},
		showBirthdayPresents: new Date().getTime() >= Date.UTC( 2017, 10 - 1, 29 )
	};

	var hostname = window.location.hostname.toLowerCase();

	if ( hostname === '' || hostname === 'localhost' || hostname === '127.0.0.1' ) {

		// Override for local debugging
		return $.extend( true, {}, configDeploy, {
			api: {
				sparql: {
					// uri: 'https://query.wikidata.org/sparql'
					uri: '/sparql'

				}
			},
			i18nLoad: function( lang ) {
				return $.when(
						$.i18n().load( 'i18n', lang ),
						$.i18n().load( 'node_modules/jquery.uls/i18n', lang )
					);
			},
			brand: {
				title: 'Localhost'
			},
			location: {
				root: './',
				index: './index.html'
			},
			showBirthdayPresents: true
		} );
	}

	return configDeploy;

} )( window, jQuery );
