const forms = function ($) {

    const validateForms = function(){
        const invalidClass = "formelement--invalid";
        const choiceGroupContainerSelector = '.choice-group-container';
        const selectAllSelector = '.select-all';
        const checkboxSelector = 'input[type="checkbox"]';
        const requiredGroupSelector = 'required-group';

        function handleError(event) {
            const target = event.target;

            const parent = $(target.parentElement);
            const input = parent.children(target.nodeName);

            switch (event.type) {
                case "invalid":
                    event.preventDefault();
                case "focusout":
                    if (input.is(":invalid")) {
                        input.addClass(invalidClass);
                    } else {
                        input.removeClass(invalidClass);
                    }
                    break;
                case "focus":
                    input.removeClass(invalidClass);
                    break;
                case "click":
                    if (input.attr('type') === 'checkbox' || input.attr('type') === 'radio') {
                        const choiceGroup = input.parents(choiceGroupContainerSelector);
                        validateChoiceGroup(choiceGroup);
                    }
                    break;

            }
        }

        $('input, select, .choice-group-container').on('invalid focusout focus click', function (event) {
            handleError(event);
        });

        function validateChoiceGroup(choiceGroup) {
            const inputs = $(choiceGroup).find('input');

            if ($(choiceGroup).hasClass(requiredGroupSelector)) {

                if ($(choiceGroup).find('input:checked').length === 0) {
                    $(choiceGroup).addClass(invalidClass);

                    inputs.each(function (idx, el) {
                        el.setAttribute('required', 'required');
                    });
                }
                else {
                    $(choiceGroup).removeClass(invalidClass);

                    inputs.each(function (idx, el) {
                        el.removeAttribute('required');
                    });
                }
            }
        }

        $('#submit-btn').click(function () {
            const $submitForm = $(this).parents("form");
            const choiceGroups = $submitForm.find(choiceGroupContainerSelector);

            choiceGroups.each(function (idx, choiceGroup) {
                validateChoiceGroup(choiceGroup);
            });
        });

        $(checkboxSelector).change(function (event) {
            const $checkbox = $(event.target);
            const isSelectAllCheckbox = $checkbox.parents(selectAllSelector).length > 0;
            const parent = $checkbox.parents(choiceGroupContainerSelector);
            const isChecked = $checkbox.is(':checked');

            const checkboxGroup = parent.find('.checkbox-list-items-group');
            const checkboxes = checkboxGroup.find(checkboxSelector);

            if (isSelectAllCheckbox) {
                if(!isChecked){
                    parent.addClass(invalidClass);
                }
                checkboxes.prop("checked", isChecked);
            }
            else {
                const checkedCheckboxes = checkboxGroup.find(checkboxSelector + ':checked');
                const isAllCheckboxesSelected = checkboxes.length === checkedCheckboxes.length;

                parent.find(selectAllSelector + ' ' + checkboxSelector).prop("checked", isAllCheckboxesSelected);
            }
        });

    };


    const prepareForms = function () {
        $('.form--form-nodes-additional input').attr('tabindex', -1);
        $('.form-node-radiogroup input[type="radio"]').click(function(){
            const radioGroup = $(this).parents('.form-node-radiogroup');
            radioGroup.find('.radio-list-item-container').removeClass('checked');
            $(this).parents('.radio-list-item-container').addClass('checked');
        });

    };

    const submitForms = function () {
        $('.form-default form').on('submit', function (event) {
            var $form = $(this);
            event.preventDefault();
            $form.remove('fieldset.form-sent, fieldset.form-error');
            $.ajax({
                type: 'POST',
                url: $form.attr('action'),
                data: $form.serialize(),
                success: function (data) {
                    $form.find('fieldset').hide();
                    $form.append('<fieldset class="form-sent alert-box--success">' + data.messages.success + '</fieldset>');
                },
                error: function (data) {
                    var errors = data.responseJSON.messages.errors;
                    $form.prepend('<fieldset class="form-error alert-box--error"><ul></ul></fieldset>');
                    var $msgContainer = $form.find('fieldset.form-error ul');
                    if (errors.hasOwnProperty('global')) {
                        $msgContainer.append('<li>' + errors.global + '</li>');
                    }
                }
            });
        });
    };
    validateForms();
    prepareForms();
    submitForms();
};
