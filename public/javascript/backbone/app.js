App = {
    Collections: {},
    Models: {},
    Views: {}
}

$(function() {

    $('#showstocks').click(function() {
        console.log('stocks')
        App.stocks = new App.Collections.Stocks;
        App.stocksView = new App.Views.StocksView({
            collection: App.stocks
        })
        App.stocks.fetch({
            reset: true
        });
    });


    $('#showusers').click(function() {
        console.log('users')
        App.users = new App.Collections.Users;
        App.usersView = new App.Views.UsersView({
            collection: App.users
        })
        App.users.fetch({
            reset: true
        });
    })

    $('#showcompanies').click(function() {
        console.log('companies')
        App.companies = new App.Collections.Companies;
        App.companiesView = new App.Views.CompaniesView({
            collection: App.companies
        })
        App.companies.fetch({
            reset: true
        });
    })

    $('#showbots').click(function() {
        console.log('bots')
        App.bots = new App.Collections.Bots;
        App.botsView = new App.Views.BotsView({
            collection: App.bots
        })
        App.bots.fetch({
            reset: true
        });
    });

    //testing for sessions
    //what is the best place for these sliders?
    $(function() {
        $(".risk-slider").slider({
            min: 0,
            max: 10,
            slide: function(event, ui) {
                $( "#risk" ).text(ui.value);
            }
        });
    });

    $(function() {
        $(".trend-slider").slider({
            min: 0,
            max: 10,
            slide: function(event, ui) {
                $("#trend").text(ui.value);
            }
        });
    });

    $(function() {
        $(".attitude-slider").slider({
            min: 0,
            max: 10,
            slide: function(event, ui) {
                $("#attitude").text(ui.value);
            }
        });
    });

     $('#setbot').click(function() {
       var bot_params = {
       		botname: $("input[name='botname']").val(),
       		balance: parseInt($("input[name='balance']").val()),
       		character: $("select[name='character']").val(),
       		interest: $("select[name='interest']").val(),
       		risk: parseInt($("#risk").text()),
       		stepsize: parseInt($("#trend").text()),
       		attitude: parseInt($("#attitude").text())
       }
       console.log(bot_params)
    });



	// Make a new bot from user submit
	$('#createbot').click(function () {
		console.log('clicked - createbot');

		// Get user-defined DOM elements
		var botname = $('#new-botname').val(),
		    character = $('#new-botcharacter').val(),
		    stock = $('#new-botstock').val(),
		    risk = parseInt($('#new-botrisk').val());
		    step = parseInt($('#new-botstep').val());
		    attitude = parseInt($('#new-botattitude').val());

		// Instantiate new bot model
		App.bot = new App.Models.Bot;
		// Set all default attributes for simulator
		App.bot.set({balance: 0, quantity: 0, active: 'True', userId: 1, stockId: 1, company: 0});
		// Set all user-defined attributes
		App.bot.set({botname: botname, character: character, stockinterest: stock, risktolerance: risk, stepsize: step, attitude: attitude});

		App.bot.save();

	})

})