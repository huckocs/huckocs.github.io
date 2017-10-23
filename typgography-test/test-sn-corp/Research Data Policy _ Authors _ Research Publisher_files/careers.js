jQuery(document).ready(function ($) {
    var rootSelector = '.action-jobs-listing';
    var listSelector = '.action-jobs-listing--action-jobs-listing-list';

    if ($(rootSelector).length === 1) {

        function filterIsActiveAndDoesNotMatch(value, filters) {
            return $.inArray(allOption, filters) < 0 && $.inArray(value, filters) < 0;
        }

        function renderJobData(dataArray, fetchAll, isResetFilterVisible) {
            $('#' + targetElementId).empty();
            $('#careersMore').hide();

            var jobList = $('<ul id="jobList" class="cms-career-jobs"></ul>');
            jobList.appendTo($('#' + targetElementId))

            var locationFilter = $('#locations').data('select');
            var businessareasFilter = $('#businessareas').data('select');
            var brandFilter = $('#brands').data('select');

            var noOfJobs = 0;

            for (var i = 0; i < dataArray.length; i++) {
                if (filterIsActiveAndDoesNotMatch(dataArray[i].country.value, locationFilter)) {
                    continue;
                }

                if (filterIsActiveAndDoesNotMatch(dataArray[i].filter1.value, businessareasFilter)) {
                    continue;
                }

                if (filterIsActiveAndDoesNotMatch(dataArray[i].filter4.value, brandFilter)) {
                    continue;
                }

                var linkUrl = dataArray[i].deeplinkJobUrl.value;
                var jobListElement = $('<li id="jobListElement' + i + '" class="cms-career-job" onclick="window.location.href=\'' + linkUrl + '\'"></li>');
                jobListElement.appendTo(jobList);

                var linkText = dataArray[i].extTitle.value;
                var id = dataArray[i].id.value;
                var linkelement = $('<h3 class="headline"><a href="' + linkUrl + '" class="link">' + linkText + '</a></h3>');
                linkelement.appendTo($('#jobListElement' + i));

                var businessArea = dataArray[i].filter1.value;
                var businessAreaElement = $("<p class='area'>" + businessArea + "</p>");
                businessAreaElement.appendTo($('#jobListElement' + i));

                var brand = dataArray[i].filter4.value;
                var brandElement = $('<p class="brand">' + brand + '</p>');
                brandElement.appendTo($('#jobListElement' + i));

                var location = dataArray[i].country.value;
                var city = dataArray[i].mfield1.value;
                var locationElement = $("<p class='location'>" + city + ', ' + mapName(location, countryNames) + "</p>");
                locationElement.appendTo($('#jobListElement' + i));

                if (isResetFilterVisible) {
                    $('#resetFilters').show();
                }
                noOfJobs++;
                if (!fetchAll && noOfJobs >= noOfJobsToBeDisplayed) {
                    $('#careersMore').show();
                    break;
                }
            }
            if(!fetchAll && noOfJobs < noOfJobsToBeDisplayed) {
                $('#careersMore').hide();
            }

             renderJobCount(dataArray, locationFilter, businessareasFilter, brandFilter);
        }


        function renderJobCount(dataArray, locationFilter, businessareasFilter, brandFilter) {
            var noOfJobs = 0;
            for (var i = 0; i < dataArray.length; i++) {
                if (filterIsActiveAndDoesNotMatch(dataArray[i].country.value, locationFilter)) {
                    continue;
                }
                if (filterIsActiveAndDoesNotMatch(dataArray[i].filter1.value, businessareasFilter)) {
                    continue;
                }
                if (filterIsActiveAndDoesNotMatch(dataArray[i].filter4.value, brandFilter)) {
                    continue;
                }
                noOfJobs++;
            }
            document.getElementById('jobCounter').innerHTML = noOfJobs + ' of ' + dataArray.length;
            if (noOfJobs == 0) {
                $('#nojobs').show();
                $('#positionheader').hide();
            } else {
                $('#nojobs').hide();
                $('#positionheader').show();
            }

        }

        function clearFilters() {
            $('#locations').data('select', [allOption]).val(allOption);
            $('#businessareas').data('select', [allOption]).val(allOption);
            $('#brands').data('select', [allOption]).val(allOption);
        }

        function mapName(key, mapping) {
            if(mapping == null) {
                return key;
            } else if(!isEmpty(mapping[key])) {
                return mapping[key];
            } else {
                return key;
            }
        }

        var dataArray;
        var isResetFilterVisible = false;

        var targetElementId = 'jobRequisitions';
        var allOption = "all";
        var noOfJobsToBeDisplayed = 10;

        var hasOwnProperty = Object.prototype.hasOwnProperty;

        function isEmpty(obj) {

            // null and undefined are "empty"
            if (obj == null)
                return true;

            // Assume if it has a length property with a non-zero
            // value
            // that that property is correct.
            if (obj.length > 0)
                return false;
            if (obj.length === 0)
                return true;

            // Otherwise, does it have any properties of its own?
            // Note that this doesn't handle
            // toString and valueOf enumeration bugs in IE < 9
            for ( var key in obj) {
                if (hasOwnProperty.call(obj, key))
                    return false;
            }

            return true;
        }

        function populateFilters(dataArray) {

            var locationArray = [];
            var businessAreaArray = [];
            var brandArray = [];

            for (var i = 0; i < dataArray.length; i++) {
                var location = dataArray[i].country.value;
                locationArray.push(location);

                var businessArea = dataArray[i].filter1.value;
                businessAreaArray.push(businessArea);

                var brand = dataArray[i].filter4.value;
                if(brand && brand.length > 0) brandArray.push(brand);
            }

            Array.prototype.contains = function(v) {
                for (var i = 0; i < this.length; i++) {
                    if (this[i] === v)
                        return true;
                }
                return false;
            };

            Array.prototype.unique = function() {
                var arr = [];
                for (var i = 0; i < this.length; i++) {
                    if (!arr.contains(this[i])) {
                        arr.push(this[i]);
                    }
                }
                return arr;
            };

            function getUniqueSortedArray(unsortedArray) {
                return unsortedArray.unique().sort();
            }

            function sortByMapping(arr, mapping) {
                var tempArr = [];
                for (var i = 0; i < arr.length; i++) {
                    tempArr.push({key: arr[i], value: mapName(arr[i], mapping)});
                }
                tempArr = tempArr.sort(function(a, b) {return a.value.localeCompare(b.value);})
                var result = [];
                for (var i = 0; i < arr.length; i++) {
                    result.push(tempArr[i].key);
                }
                return result;
            }

            function createOption(arr, elemName, mapping) {
                if(mapping != null) {
                    arr = sortByMapping(arr, mapping);
                }
                var preSelectedString = $(listSelector).data('select-' + elemName);
                var preselectedArr = preSelectedString ? preSelectedString.split(',') : [];
                var $filter = $('#' + elemName);
                $.each(arr, function(idx, elem) {
                    var selected = $.inArray(elem, preselectedArr) >= 0;
                    $filter.append($('<option value="' + elem + '" ' + (selected ? 'selected="selected"' : '') + '>'+ mapName(elem, mapping) + '</option>'))
                });
                if(preselectedArr.length > 0) {
                    $filter.data('select', preselectedArr);
                } else {
                    $filter.data('select', [$filter.find('option').first().attr('value')]);
                }
            }
            createOption(getUniqueSortedArray(locationArray), "locations", countryNames);
            createOption(getUniqueSortedArray(businessAreaArray), "businessareas");
            createOption(getUniqueSortedArray(brandArray), "brands");
        }


        var careers = (function() {

            var handleChange = function(e) {
                var $filter = $(e.target);
                $filter.data('select', [$filter.val()]);
                isResetFilterVisible = true;
                renderJobData(dataArray, false, isResetFilterVisible);
            };

            return {
                handleResponse : function(data) {
                    dataArray = data.sfobject;
                    if (dataArray.length === 0) {
                        $('#nojobs').show();
                        $('#positionheader').hide();
                    } else {
                        var counterHtml = ' <span id="jobCounter" class="counter"/>';
                        var $header = $($(rootSelector + ' .headline')[0]);
                        $header.html($header.text() + counterHtml);
                        populateFilters(dataArray);
                        renderJobData(dataArray, false, isResetFilterVisible);
                        $('#locations, #businessareas, #brands').on('change', handleChange);
                        $('#showMore').on('click',
                            function(e) {
                                $('#careersMore').hide();
                                renderJobData(dataArray, true, isResetFilterVisible);
                                e.preventDefault();
                            });

                        $('#resetFilters').on('click',
                            function(e) {
                                $('#resetFilters').hide();
                                clearFilters();
                                isResetFilterVisible = false;
                                renderJobData(dataArray, false, isResetFilterVisible);
                                e.preventDefault();
                            });

                        $(listSelector).show();
                    }
                }
            }
        })();

        function crossDomainAjax(url, successCallback) {
            // IE8 & 9 only Cross domain JSON GET request
            if ('XDomainRequest' in window && window.XDomainRequest !== null) {
                var xdr = new XDomainRequest(); // Use Microsoft XDR
                xdr.onload = function() {
                    var dom = new ActiveXObject('Microsoft.XMLDOM'),
                        JSON = $.parseJSON(xdr.responseText);

                    dom.async = false;

                    if (JSON == null || typeof (JSON) == 'undefined') {
                        JSON = $.parseJSON(data.firstChild.textContent);
                    }

                    successCallback(JSON); // internal function
                };

                xdr.onerror = function() {
                    _result = false;
                };

                xdr.onprogress = function() {};

                xdr.open('get', url);
                xdr.send();
            }

            // IE7 and lower can't do cross domain
            else if (navigator.userAgent.indexOf('MSIE') != -1 &&
                parseInt(navigator.userAgent.match(/MSIE ([\d.]+)/)[1], 10) < 8) {
                return false;
            }

            // Do normal jQuery AJAX for everything else
            else {
                $.ajax({
                    url: url,
                    cache: false,
                    dataType: 'json',
                    type: 'GET',
                    async: false, // must be set to false
                    success: function(data, success) {
                        successCallback(data);
                    }
                });
            }
        }

        var config = {
            "companyId" : "CC1C2DE9-EBC2-5C65-A253-83097B488441", // Server
            "locale" : "en_US;de_DE;nl_NL;en_GB",
            "sort" : [ {
                "filter1.value" : 1
            }, {
                "extTitle.value" : 1
            }]
        };
        $.support.cors = true;
        crossDomainAjax('//services.abayoo.de/queryJobs.php?'+$.param(config), careers.handleResponse);
    }
});
