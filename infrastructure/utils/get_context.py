from collections import ChainMap
from typing import Dict, List, Union

from aws_cdk import Stage
from constructs import Construct


def _get_profile_names(profiles: Union[List, str, None]) -> List[str]:
    if isinstance(profiles, list):
        return profiles
    elif isinstance(profiles, str):
        return profiles.replace(" ", "").split(",")
    elif profiles is None:
        return []
    else:
        raise TypeError("profiles must be a list or comma separated string")


def _get_profiles(construct: Construct, profile_names: List[str]) -> List[Dict]:
    profiles = []
    for profile in profile_names:
        profile = construct.node.try_get_context(profile)
        if profile:
            profiles.append(profile)
    return profiles


def try_get_context(
    construct: Construct, key: str
) -> Union[str, int, float, Dict, List, bool, None]:
    stage_name = Stage.of(construct).stage_name

    specific_context = construct.node.try_get_context(stage_name) or {}
    prod_context = (
        (construct.node.try_get_context("prod") or {})
        if stage_name.startswith("prod")
        else {}
    )
    dev_context = (
        (construct.node.try_get_context("dev") or {})
        if stage_name.startswith("dev")
        else {}
    )

    specific_profiles = _get_profile_names(specific_context.get("profiles"))
    prod_profiles = (
        _get_profile_names(prod_context.get("profiles"))
        if stage_name.startswith("prod")
        else []
    )
    dev_profiles = (
        _get_profile_names(prod_context.get("profiles"))
        if stage_name.startswith("dev")
        else []
    )
    default_profiles = _get_profile_names(construct.node.try_get_context("profiles"))

    default_map = ChainMap(
        specific_context,
        prod_context,
        dev_context,
        *_get_profiles(construct, specific_profiles),
        *_get_profiles(construct, prod_profiles),
        *_get_profiles(construct, dev_profiles),
        *_get_profiles(construct, default_profiles),
    )

    value = default_map.get(key)
    if value is None:
        value = construct.node.try_get_context(key)

    return value


def get_context(
    construct: Construct, key: str
) -> Union[str, int, float, Dict, List, bool, None]:
    value = try_get_context(construct, key)
    if value is None:
        raise ValueError(
            f"{key} is a required context key but could not find in CDK context"
        )
    return value
